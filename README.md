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
![Gif](/public/readme_assets//Earth_Examine.gif)

The Globe is composed of multiple layers, spread across multiple levels. There are 5 total parts to creating this model. Thank you to [FarazzShaikh](https://github.com/FarazzShaikh/THREE-CustomShaderMaterial) for his wonderful custom shader material that allows for custom shaders and uniforms to be injected to standard Threejs materials.
- **The Earth Sphere**

    The Earth Sphere is by far the most complex layer consisiting of a custom shader that allows texture map animation, a bump map, and a specular map applied. There are two version of the earth sphere, one with season animations and one without.
    - [Earth](/src/meshes/earth/earth.jsx)
    - [Earth Season](/src/meshes/earth/earth_weather.jsx)
- **The Earth Cities Light**

    The Earth Cities Light layer makes use of a custom shader that allows cities lights to only show up at 
    night time. The light itself is a combination of an alphamap and emmisve property of the material. 
    - [Earth Cities Light](/src/meshes/earth/earth_cities.jsx)
- **The Earth Cloud**

    The Earth Cloud layer is a simple sphere with the cloud texture applied as an alpha map. 
    - [Earth Cloud](/src/meshes/earth/earth_cloud.jsx)
- **The Earth Fresnel**

    The Earth Fresnel layer is a simple single color sphere that uses a custom shader that allows for a light-accurate fresnel effect.
    - [Earth Fresnel](/src/meshes/earth/fresnel.jsx)
- **The Earth Atmosphere**

    The Earth Atmosphere layer is a simple single color sphere that uses a custom shader that invert its normals, and applies a reverse fresnel effect. This inconjuction with the Backside rendering allows for a realistic light scattering effect.
    - [Earth Atmosphere](/src/meshes/earth/atmosphere.jsx)

There are also a combination version of these layer: 
- [Earth Meshes Atmosphere](/src/meshes/earth/earth_meshes_atmosphere.jsx)
- [Earth Meshes Physical](/src/meshes/earth/earth_meshes_physical.jsx)

## Animation
There are several animations both pre-determined and responsive that are used in the project. The animation makes use of several libraries such as GSAP, Threejs, and React Three Fiber.
### Pre-determined Animations 
All predeterminedd animation such as the earth and cloud rotation are done using the [UseFrame](https://r3f.docs.pmnd.rs/api/hooks#useframe) hook from React Three Fiber. 
### Responsive Animations
Responsive Animations are created through a combination of global state management such [UseContext](https://react.dev/reference/react/useContext) and [Redux](https://redux.js.org/) to prevent prob drilling. Specifically, Context store the pre-determined animations binded to the GUI element, and Redux stores the trigger for the responsive animations. The animation is played through [GSAP](https://gsap.com/) and [UseFrame](https://r3f.docs.pmnd.rs/api/hooks#useframe).
### Shader Animations
The [Earth Season](/src/meshes/earth/earth_weather.jsx) with seasons has a unique implementation of animation. The animation is done by passing a custom transformation matrix uniform to the shader, and having the texture map as a massive texture sheet. The shader then uses the transformation matrix to calculate the correct texture maps to interpolate between. (This is subjected to change as the method get more modulized)

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
