# ng-ghosts-loading

ng-ghosts-loading is a graphical interface library that you can generate phantom or skeleton components for an angular application, an objective as simple as using ng-ghosts-loading. :smile:

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f2.gif)



## Getting started

ng-ghosts-loading it is an easy way to build page loading elements that make the user more calm.  And ng-ghosts-loading also soothes the angular application developer, because it saves work on developing CSS code with complex animations. 

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

#### circular ghost tag

You can create a circular ghost tag by adding the circular property. As below:

![Image](https://github.com/SergioNoivak/ng-ghosts-loading/blob/master/src/photos/f4.gif)

````html
<!-- app.component.html -->

<ghost-loading [width] = "100" [height] = "100" circle="true"  >
</ghost-loading>

````




 

