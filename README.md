### [faq-beta](https://pwafire.org/developer/faq-beta/)
Build an amazing and exciting **FAQ Section or Page** - FAQs (Frequently Asked Questions) with Project [faq-beta](https://pwafire.org/developer/faq-beta/)

 ![https://pwafire.org/developer/faq-beta/](https://github.com/mayeedwin/faq-beta/blob/master/src/faq-beta-screenshot.png)
 
### features

1. Very responsive.   

2. Easy to configure.

3. Sleeky appearance.

4. [Firebase add-on.](https://github.com/mayeedwin/faq-beta/tree/master/for-firebase)

If you use firebase in your **web app** or would want to **integrate**, then use the **firebase congiguration** in the **for-firebase** folder to set up your **faq-beta** section. To add more questions, configure as directed here and update the firebase data in the [database file here](https://github.com/mayeedwin/faq-beta/blob/master/for-firebase/data/faqbetadb.json). When done, enjoy!

### setting up
faq-beta is built with **javascript**, **html5** and **css**. You need atleast an intermediate background in all of these languages to get started even though anyone with or without skills in the same can set up with the guide provided.
### getting started
1. Download **faq-beta** into your project's **root folder**. Edit the **faq-beta.html** section's questions and answers to fit your project's or company's needs. Check the code below;
```html

   <h3>Your ( FAQs ) Header</h3><br>
   <p class="faqbeta_accordion">Your Question</p>
   <div class="faqbeta_panel">Your Answer</div>

```
2. Copy the edited **html5** section in **faq-beta.html** to wherever you want it to appear in your page;

3. If you do not have a **src** folder, just link up your page to the **faq-beta.js** and **faq-beta.css** files.
### styling faq-beta
Here you may configure the **faq-beta.css** file to fit your website's or web app's theme colors.
>style the element that is used to open and close the faqbeta_accordion class

```css

p.faqbeta_accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 700px;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    margin-bottom: 10px;
}

```
>add a background color to the faqbeta_accordion if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover)

```css

p.faqbeta_accordion.active,
p.faqbeta_accordion:hover {
    background-color: #ddd;
}

```
>style the element that is used for the faqbeta_panel class

```css

div.faqbeta_panel {
    padding: 0 18px;
    background-color: #fbfbfb;
    max-height: 0;
    overflow: hidden;
    transition: 0.4s ease-in-out;
    opacity: 0;
    margin-bottom: 10px;
    text-align: left;
    width: 700px;
}

```
>style the main faq-beta section

```css

#gdg-faqs {
    padding: 10px;
    background-color: #fbfbfb;
}

```

### what's next?
To make it more exciting, the next version of project **faq-beta** will have a **json** file that will alow you to just configure **faq-beta** by filling in your questions and answers without the need of editing **faq-beta.html**.
### [demo apps](https://gdgmoi.com/directory/)
| Progressive Web App | Web App Link |
| --- | --- |
| GDG Eldoret | [View Now](https://gdgmoi.com/directory) |
### [join the conversation](https://twitter.com/pwafire)
| Communication Channel | Talk to us |
| --- | --- |
| Live Twitter Chat | [Tweet us](https://twitter.com/pwafire) |
| Slack Workspace | [Join Workspace](http://bit.ly/2oPNK7S) |
### license
| License |License url |
| --- | --- |
| Apache License 2.0 | [View License](https://github.com/mayeedwin/pwafire/blob/master/LICENSE) |
### support us 
Donate a star, like, follow and contribute in any way. Be sure to use **Project faq-beta**. If you use [faq-beta](https://pwafire.org/developer), kindly let us know via **info@pwafire.org** | **mayedwine1@gmail.com** or JUST simply [Tweet us](https://twitter.com/pwafire).


