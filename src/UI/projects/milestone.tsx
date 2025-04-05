import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { CarouselApi, CarouselItem } from './components/ui/carousel'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCallback, useEffect, useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import "@/index.css";

export interface MilestoneProps {
  owner: string;
  repo: string;
  branch: string;

  tittle: string;
  subtittle: string;

  description: string[];
}

interface GitHubCommitAuthor {
  name: string;
  email: string;
  date: string;
}

interface GitHubCommitDetails {
  author: GitHubCommitAuthor;
  committer: GitHubCommitAuthor;
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  comment_count: number;
  verification: {
    verified: boolean;
    reason: string;
    signature: string | null;
    payload: string | null;
  };
}

interface GitHubCommit {
  sha: string;
  node_id: string;
  commit: GitHubCommitDetails;
  url: string;
  html_url: string;
  comments_url: string;
  author: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    type: string;
  } | null;
  committer: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    type: string;
  } | null;
  parents: {
    sha: string;
    url: string;
    html_url: string;
  }[];
}

function Milestone({ content }: { content: MilestoneProps }) {
  // Fixed the CarouselApi state declaration with proper type
  // const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  // const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0);
  // const [carouselItems, setCarouselItems] = useState(0);
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const root = document.documentElement;
    const chartColor = getComputedStyle(root).getPropertyValue("--chart-1");
    console.log("Chart color value:", chartColor); // Check if it has a value
  }, []);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const cachedDataUrl = `${import.meta.env.BASE_URL}data/${content.owner}-${content.repo}-${content.branch}-commits.json`;
        const response = await fetch(cachedDataUrl);
        if (response.ok) {
          const data = await response.json();
          setCommits(data);
        } else {
          console.error(
            `Failed to fetch commits: ${response.status} ${response.statusText}`,
          );
        }
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    }
    fetchCommits();
  }, [content]);

  useEffect(() => {
    async function fetchContribution() {
      try {
        const cachedDataUrl = `${import.meta.env.BASE_URL}data/${content.owner}-${content.repo}-${content.branch}-contribution.json`;
        const response = await fetch(cachedDataUrl);
        if (response.ok) {
          const data = await response.json();
          const trimmedData = data[0].weeks.filter(
            (week: { w: number; a: number; d: number }) =>
              week.a > 0 || week.d > 0,
          );
          console.log(trimmedData);
          const transformedData = trimmedData.map(
            (week: { w: number; a: number; d: number; c: number }) => ({
              w: new Date(week.w * 1000).toLocaleDateString(),
              commits: week.c,
              additions: week.a,
              deletions: week.d,
            }),
          );
          console.log(transformedData);
          setChartData(transformedData);
        } else {
          console.error(
            `Failed to fetch commits: ${response.status} ${response.statusText}`,
          );
        }
      } catch (error) {
        console.error("Error fetching commits:", error);
      }
    }
    fetchContribution();
  }, [content]);

  // Set up an effect to create a timer that scrolls to the next carousel item
  // useEffect(() => {
  //   if (!carouselApi) return;

  //   // Create an interval that calls scrollNext every 3 seconds
  //   const interval = setInterval(() => {
  //     carouselApi.scrollNext();
  //     const currentIndex = carouselApi.selectedScrollSnap();
  //     setCarouselCurrentIndex(currentIndex);
  //   }, 4000);

  //   // Clean up the interval when component unmounts
  //   return () => clearInterval(interval);
  // }, [carouselApi]);

  // useEffect(() => {
  //   if (!carouselApi) return;
  //   setCarouselCurrentIndex(carouselApi.selectedScrollSnap());
  //   setCarouselItems(carouselApi.slideNodes().length);
  // }, [carouselApi]);

  const commitsDisplay = useCallback(() => {
    if (!commits) return null;
    const limitWords = (text: string, wordLimit: number = 15): string => {
      const words = text.split(/\s+/);
      if (words.length <= wordLimit) return text;
      return words.slice(0, wordLimit).join(" ") + "...";
    };
    const commitList = commits.map((commit, index) => (
      <div key={index} className="w-full flex flex-col space-y-1">
        <div className="w-full h-0.5 bg-gray-300 rounded-full pr-3"></div>
        <div className="flex flex-row space-x-1 w-full">
          <img
            src={commit.author?.avatar_url || "https://via.placeholder.com/150"}
            alt={commit.commit.author.name}
            className="w-8 h-8 rounded-full mb-2 border-1 text-gray-300"
          ></img>
          <a
            href={commit.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[calc(100%-2rem)]"
          >
            <p className="w-full line-clamp-2 text-green-600 hover:text-green-500   transition-colors text-sm/tight font-semibold">
              {limitWords(commit.commit.message, 12)}
            </p>
          </a>
        </div>
        <div className="flex-row flex justify-between">
          <p className="text-xs text-gray-300">{commit.commit.author.name}</p>
          <p className="text-xs text-gray-300">
            {new Date(commit.commit.author.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    ));
    return (
      <div className="flex flex-col text-left space-y-2">{commitList}</div>
    );
  }, [commits]);

  const chartConfig = {
    commits: {
      label: "Commits",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <div>
      <div className="relative z-30">
        <Card className="min-w-6xl h-fit flex-col flex border-2 border-gray-300">
          <CardHeader>
            <div className="flex flex-col justify-start items-start space-y-1">
              <CardTitle className="text-4xl font-bold">
                {content.tittle}
              </CardTitle>
              <CardDescription className="text-xl">
                {content.subtittle}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col h-[30rem] w-full space-y-6">
            <div className="flex flex-row w-full h-4/5">
              <div className="w-4/5 h-h-full text-left">
                <div className="space-y-2">
                  {content.description.map((item, index) => (
                    <div key={index} className="flex items-start mb-2">
                      <span className="mr-2 text-gray-500">•</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/5 h-full flex flex-col space-y-2">
                <p className="flex justify-start text-md font-bold text-left">
                  {content.branch}
                </p>
                <div className="h-full pb-10">
                  <ScrollArea className="h-full">
                    <div className="w-full">{commitsDisplay()}</div>
                  </ScrollArea>
                </div>
              </div>
            </div>
            <div className="w-full h-1/5">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} horizontal={false} />
                  <XAxis
                    dataKey="w"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="commits" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Milestone;
