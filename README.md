# Galen
Galen is a framework that has been developed for automation testing of responsive design for web applications.<br>Now a days it has become a fully functional testing framework with rich reporting and test management system.<br>It supports both Javascript and Java.

#Mode of operation
Galen operates in the following manner.<br>
1. Galen opens a page in a browser.
2. Resizes the browser to a specific size.
3. Tests the layout with Galen specs.

In case the page is not directly accessible, Galen allows you to perform some operations on the website<br> first. As it is based on Selenium all operations related to clicking, typing, injecting client-side<br> javascript can be done very easily.

Galen specs is the language with which the specifications of responsiveness can be defined as per different<br>devices. The following code snippet will give an idea about how easy it is to implement the page specifications using Galen.

`= Main section =
    @on *
        header:
            height 100px 
            inside screen 0px top 
            width 100% of screen/width 

        menu:
            height 50 to 60px 
            width 100% of screen/width 
            below header ~ 0px 

        search-button:
            inside menu 20 to 50px left, 0 to 10px top 

    @on mobile
        search-button:
            width 100px 
         
    @on desktop 
        search-button:
            width 150px` 
