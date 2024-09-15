
# 3D Interactive Globe Landing Page
  

## Introduction



Hello!

  

You have arrived at my landing page repository. Feel free to look around!

  

This is my first time creating and deploying a JavaScript website, and here is what I have so far! The project makes use of [React](https://react.dev/), [Vite](https://vitejs.dev/), [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction), [GSAP](https://gsap.com/), [Tailwind](https://tailwindui.com/), [shadcn ui](https://ui.shadcn.com/), and [Redux](https://redux.js.org/).

  

This README will serve to help you understand how the website works, as well as the interesting curiosities I discovered while making this website. I hope you enjoy the read!

  

![Image](/public/readme_assets/Screenshot%20(508).png)

  
  

## Table of Contents

  

- [Introduction](#introduction)

- [Features](#features)

  - [The Globe](#the-globe)

  - [Animation](#animation)

  - [GUI](#gui)

- [Installation](#installation)

  

## Introduction

  

This project is a 3D Globe Landing Page built with React, Three.js, and Tailwind CSS. It showcases various locations with interactive elements and animations.

  

## Features

### The Globe

![Gif](/public/readme_assets//Earth_Examine.gif)

  

The Globe is composed of multiple layers, spread across multiple levels. There are 5 total parts to creating this model. Thank you to [FarazzShaikh](https://github.com/FarazzShaikh/THREE-CustomShaderMaterial) for his wonderful custom shader material that allows for custom shaders and uniforms to be injected to standard [Three.js](https://threejs.org/) materials.

-  **The Earth Sphere**

  

The Earth Sphere is by far the most complex layer, consisting of a custom shader that allows texture map animation, a bump map, and a specular map applied. There are two versions of the earth sphere, one with season animations and one without.

- [Earth](/src/meshes/earth/earth.jsx)

- [Earth Season](/src/meshes/earth/earth_weather.jsx)

-  **The Earth Cities Light**

  

The Earth Cities Light layer makes use of a custom shader that allows cities lights to only show up at

nighttime. The light itself is a combination of an alpha map and missive property of the material.

- [Earth Cities Light](/src/meshes/earth/earth_cities.jsx)

-  **The Earth Cloud**

  

The Earth Cloud layer is a simple sphere with the cloud texture applied as an alpha map.

- [Earth Cloud](/src/meshes/earth/earth_cloud.jsx)

-  **The Earth Fresnel**

  

The Earth Fresnel layer is a simple single color sphere that uses a custom shader that allows for a light-accurate Fresnel effect.

- [Earth Fresnel](/src/meshes/earth/fresnel.jsx)

-  **The Earth Atmosphere**

  

The Earth Atmosphere layer is a simple single color sphere that uses a custom shader that invert its normals, and applies a reverse Fresnel effect. This, in-conjunction, with the Backside rendering, allows for a realistic light scattering effect.

- [Earth Atmosphere](/src/meshes/earth/atmosphere.jsx)

  

There are also a combination version of these layers:

- [Earth Meshes Atmosphere](/src/meshes/earth/earth_meshes_atmosphere.jsx)

- [Earth Meshes Physical](/src/meshes/earth/earth_meshes_physical.jsx)

  

## Animation

![Gif](/public/readme_assets/Animation.gif)

There are several animations both pre-determined and responsive that are used in the project. The animation makes use of many libraries such as [GSAP](https://gsap.com/), [Three.js](https://threejs.org/), and [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction).

### Pre-determined Animations

All predetermined animation such as the earth and cloud rotation are done using the [UseFrame](https://r3f.docs.pmnd.rs/api/hooks#useframe) hook from [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction).

### Responsive Animations

Responsive Animations are created through a combination of global state management such [UseContext](https://react.dev/reference/react/useContext) and [Redux](https://redux.js.org/) to prevent prob drilling. Specifically, Context store the pre-determined animations bound to the GUI element, and Redux stores the trigger for the responsive animations. The animation is played through [GSAP](https://gsap.com/) and [UseFrame](https://r3f.docs.pmnd.rs/api/hooks#useframe).

### Shader Animations

The [Earth Season](/src/meshes/earth/earth_weather.jsx) with seasons has a unique implementation of animation. The animation is done by passing a custom transformation matrix uniform to the shader, and having the texture map as a massive texture sheet. The shader then uses the transformation matrix to calculate the correct texture maps to interpolate between. (This is subjected to change as the method get more modularized)

  

### GUI

The GUI is implemented through a combination of [React Hook](https://react.dev/reference/react) for callback, [Redux](https://redux.js.org/) for state management, and [shadcn ui](https://ui.shadcn.com/) for visualization. The reason [shadcn ui](https://ui.shadcn.com/) is used is that it is a unique custom UI library that code reusability and quick implementation. As a side note, the GUI used for debug and constructing this website is [Leva](https://github.com/pmndrs/leva) because of their easy and fast hook implementation.

  

## Installation

  

To get started with the project, follow these steps:

  

1.  **Clone the repository:**

  

```sh

git clone https://github.com/th-nguyen-dev/ryannguyenweb.git

cd ryannguyenweb

```

  

2.  **Install dependencies:**

  

```sh

npm install

```

  

3.  **Run the development server:**

  

```sh

npm run dev

```

[1]: https://threejs.org/
