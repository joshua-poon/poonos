---
layout: post
title:  "Creating a form on my static website"
date:   2022-04-13 03:49:11 +1100
categories: projects
tags: programming
---

I didn't think you'd be able to put a form on a static website. But then again, I'm not very experienced with Jekyll / HTML blah blah blah. 

I originally made a Survey Monkey form, but then I thought why did I need to use a big company where I had to access a confusing website. So I decided to use <a href="https://www.staticforms.xyz/">https://www.staticforms.xyz/</a>. It uses Amazon SES to send emails, has a spam protection field and a simple interface on a website. This is the code provided

    <!-- Make sure you don't change the form action-->
    <form action="https://api.staticforms.xyz/submit" method="post">
        <!-- Replace with accesKey sent to your email -->
        <input type="hidden" name="accessKey" value="e44fc5d0-0b52-4cb1-9f79-fefc3800d89c"> <!-- Required -->
        <input type="text" name="name"> <!-- Optional -->
        <input type="text" name="subject"> <!-- Optional -->
        <input type="text" name="email"> <!-- Optional -->
        <input type="text" name="phone"> <!-- Optional -->
        <textarea name="message"></textarea> <!-- Optional -->
        <!-- If you want replyTo to be set to specific email -->
        <input type="text" name="replyTo" value="myreplytoemail@example.com"> <!-- Optional -->
        <!-- Specify @ as reply to value if you want it to be customers email -->
        <input type="hidden" name="replyTo" value="@"> <!-- Optional -->
        <!-- If you want form to redirect to a specific url after submission -->
        <input type="hidden" name="redirectTo" value="https://example.com/contact/success"> <!-- Optional -->
        <input type="submit" value="Submit" />
    </form>
    
The 'redirectTo' part, I want to make it so that it just uses Javascript to alter a textContent saying 'you're email has been sent' and I'll work that out later. Probably add a click listener to Submit or something. When I blocked out the redirectTo it simply redirected me to some minimal html. It didn't have type="email" for the email, which automatically checks that the provided information contains @ and .com or something similar, so I changed that. I also introduced a checkbox for subscribing using type="checkbox", which wasn't difficult as this is just a simple form. 

To generate the accesskey, you had to enter your email. I used a secondary email joshpoonblog@gmail.com which automatically forwards to my main email. But I reckon it's a more useful concept than having to log in to SurveyMonkey every time submit is pressed.
