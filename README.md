# ng-ghosts-loading

ng-ghosts-loading is a graphical interface library that you can generate phantom or skeleton components for an angular application, an objective as simple as using ng-ghosts-loading. :smile:

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f2.gif)



## Getting started

ng-ghosts-loading it is an easy way to build page loading elements that make the user more calm.  And ng-ghosts-loading also soothes the angular application developer, because it saves work on developing CSS code with complex animations. 

## Install

you can download ng-ghosts-loading via npm: 

````
npm i ng-ghosts-loading
````

Or you can download the zip file from the github repository   🐙 :

https://github.com/SergioNoivak/ng-ghosts-loading



## The `ghost-loading` tag

The `ghost-loading` tag is the basic loading container that the framework works.a basic example of using the tag is the creation of a phantom square, as below: 

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f3.gif)

The html code is very simple, as shown below: 

````html
<!-- app.component.html -->

<ghost-loading [width] = "100" [height] = "100"   >
</ghost-loading>
````

When creating a tag `ghost-loading`, it must have the attributes ``height`` and ``width``, which must be passed in pixels. 

### circular ghost tag

You can create a circular ghost tag by adding the circular property. As below:

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f4.gif)

````html
<!-- app.component.html -->

<ghost-loading [width] = "100" [height] = "100" circle="true"  >
</ghost-loading>

````



### Adding child tags to `ghost-loading`

Only with the `ghost-loading` tag is it not possible to create complex styles, so to develop complex styles it is possible to have children of` ghost-loading` that will automatically be ghosts. The entire style application will still be preserved for your children from ``ghost-loading``:

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f5.gif)

````html

<!-- app.component.html -->
<div class="center">
  <ghost-loading [width] = "100" [height] = "100" circle="true"  >
    <img width="100" height="100" style="border-radius: 50%;" src="./image.png" alt="" class="">
  </ghost-loading>
</div>

````

in this example the image will also be applied by ghosts because it is a ``child of ghost-loading`` tag

### ``delay`` property

The delay property of ghost-loading allows tags to have different ghosts animations. If no delay value is provided, the ghost component will assume 1.5 seconds of animation, but it is possible to provide the delay property with a value in seconds, as follows:

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f6.gif)

````html

<!-- app.component.html -->

  <ghost-loading [width] = "100" [height] = "10"   >
  </ghost-loading>

  <ghost-loading [delay]="2.0" [width] = "100" [height] = "10"   >
  </ghost-loading>

````

It is observed that the two ghosts elements are not synchronized, this is due to the delay property. 





## Example 1 : Dog contact ghost

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f8.gif)

In this example we are going to create a loading page with a photo of a beautiful dog with four ghost lines. The ghostly style is applied to the dog's photo because he is the son of the tag ``ghost-loading`` .Please note below:

````html

 <ghost-loading [width]= "200"  [height]= "200" [circle]="true">
          <img style="border-radius: 50%;" width="200" height="200" [src]="imgSrc" alt="" class="">
 </ghost-loading>

   <div style="margin-top: 10px;">
    <ghost-loading [width]= "200"  [height]= "10" ></ghost-loading>
  </div>
  <div style="margin-top: 10px;">
    <ghost-loading [width]= "200"  [height]= "10" ></ghost-loading>
  </div>
  <div style="margin-top: 10px;">
    <ghost-loading [width]= "200"  [height]= "10" ></ghost-loading>
  </div>
  <div style="margin-top: 10px;">
    <ghost-loading [width]= "200"  [height]= "10" ></ghost-loading>
  </div>


````



## Example 2 : friend's list

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f7.gif)

In this example we are going to create a list of ghost friends, which can be used on a social network, for example. The vector ``[1,2,3,4,5]`` can be created in the component, but it is not the objective here, the example demonstrates how ghosts can be combined in a list to create complex elements, like a list of friends in a network Social.

````html

<!-- app.component.html -->

  <div *ngFor="let item of [1,2,3,4,5]" style="margin-bottom: 5px;" >
    <ghost-loading [width] = "300" [height] = "50"   >
      <div style="display: flex;">
        <ghost-loading [delay]='2.0' [width] = "45" [height] = "45" [circle]="true" ></ghost-loading>
        <div style="flex-direction: column; ">
          <div *ngFor="let x of [1,2,3]" style="margin-bottom: 5px; margin-left: 10px; ">
          <ghost-loading   [delay]='2.0' [width] = "240" [height] = "8" ></ghost-loading>
        </div>
        </div>
      </div>
  </ghost-loading>

  </div>
````

In this example, asynchronicity is guaranteed thanks to the ``delay`` attribute. As the external delay for the root node ``ghost-loading`` was not informed, a delay of 1.5 seconds is assumed for this. For the other ghosts elements, there is an informed ``delay`` property equal to 2.0 seconds



## Tag attributes

List of possible attributes of a ghost-loading: 

<ul>
    <li><b>width</b>: 
represents the width of a ghost, and must be expressed as an integer in pixel values.</li>
    	<li><b>height</b>:
represents the height of a ghost, and must be expressed as an integer in pixel values.</li>
	<li><b>delay</b>:
Represents the delay / duration in the animation of the ghost.
    </li>
    <li><b>circle</b>:
Boolean attribute that indicates whether the ghost is a circle.</li>
</ul>



# Contact me 

@serginhosnovak@hotmail.com