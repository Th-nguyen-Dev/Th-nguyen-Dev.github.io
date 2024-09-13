# 3D Interactive Globe Landing Page

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Explaination](#explaination)
- [Curiosities](#curiosities)
- [Contribution](#contribution)

## Introduction


Hello!

You have arrived at my landing page repository. Feel free to look around!

This is my first time creating and deploying a JavaScript website, and here is what I have so far! The project makes use of React, Vite, Threejs, React Three Fiber, GSAP, Tailwind, Shadcn, and Redux.

 This README will serve to help you understand how the website works, as well as interesting curiosities I discovered while making this website. I hope you enjoy the read!

![Image](/public/readme_assets/Screenshot%20(508).png)


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
    - [The Globe](#the-globe)
- [Installation](#installation)

## Introduction

This project is a 3D Globe Landing Page built with React, Three.js, and Tailwind CSS. It showcases various locations with interactive elements and animations.

## Features

- Interactive 3D globe
- Location-based information display
- Smooth animations and transitions
- Responsive design
- Tailwind CSS for styling

### The Globe
<div style="display: flex; flex-wrap: wrap;">
    <div style="width: 50%; height:50%; margin-rigt: 20;">
        <img src="./public/readme_assets/earth_layers.gif" alt="Gif" style="width:95%;">
    </div>
    <div style="width: 50%; height:100%;">
        <p>
            The Globe is composed of multiple layers, spread across multiple levels. There are 5 total parts to creating this model: 
            <ul>
                <li style="font-weight: bold;"> The Earth Sphere
                    <p style="font-weight: regular;">
                        The Earth Sphere is by far the most complex layer consisiting of a custom shader that allows texture map animation, a bump map, and a specular map applied.
                    </p>
                </li>
                <li> The Fresnel Shader</li>
                <li> The Cloud Sphere</li>
                <li> The Atmosphere Shader</li>
            </ul>
        </p>
    </div>
    <div style="width:100%"> my mum is a wonderful woman</div>
</div>


## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/th-nguyen-dev/ryannguyenweb.git
    cd ryannguyenweb
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```
