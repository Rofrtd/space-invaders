## Space Invaders

[Space Invaders](https://en.wikipedia.org/wiki/Space_Invaders) is a 1978 shoot 'em up arcade game developed by Tomohiro Nishikado.
It was the first fixed shooter and set the template for the shoot 'em up genre. The goal is to defeat wave after wave of descending aliens with a horizontally moving laser to earn as many points as possible.

### Product Statement

This is a simple JavaScript web game designed to explain the most important concepts of object-oriented programming and ilustrate the book [Junior Objects](https://www.amazon.com/Junior-Objects-Yegor-Bugayenko/dp/B08BDWYNWM) by [Yegor Bugayenko](https://github.com/yegor256) with practical examples.

### Requirements

- R1: The user can move the Laser left and right with arrow keys.
- R2: The User can fire Bullets by pressing the Space Key.
- R3: The System can place Invaders on the screen, increasing their amount and the soeed of movement.
- R4:The User can destroy an Invader by hitting it with a flying Bullet.
- R5: The System can stop the game and show the score when any Invader touches the Laser.

![Use Case Diagram](https://user-images.githubusercontent.com/25412194/135713471-6e3341d5-0b50-45d2-9f2b-4f89b7713107.png)

#### Quality Requirements

- Q1: The response time for all Users's actions must be lees than 5ms, on a 1.7GHz+ computer with 8Gb+ RAM,with no CPU-intensive programs in the background.
- Q2: The System must work on Safari 10+, Chrome 60+, IE 10+, and Firefox 65+.
- Q3: The source code must be ESLint compliant.

## Architecture

### Object Diagram

![Object Diagram](https://user-images.githubusercontent.com/25412194/135713432-b74e0c10-6709-4785-865a-f835a16b46a7.png)

- `field` is the abtraction of the entire game.
- `army` is the entire group of Invaders.
- `laser` is the devide the User moves left and right to point the gun
- `bullet`(s) and `invader`(s) are the flying objects on the screen.

- `field`, `army` and `laser` will exist in only one instance.
- `bullet` may or may not exist
- `invader` may be present in many instances

### Component Diagram

![Component Diagram](https://user-images.githubusercontent.com/25412194/135713665-6afb25bd-c24c-47a0-8efe-a46d0a95bfa2.png)

- `*.js` is the collection of all JavaScript objects.
- `mains.css` is the only CSS stylesheet.
- `game.html` is the main and only HTML file in the project.
- `Grunt` is the build automated via Grunt, using `Gruntfile`.

### Deployment Diagram

![Deployment Diagram](https://user-images.githubusercontent.com/25412194/135714271-38a106b3-4be7-4b55-bd56-25d97325185f.png)
