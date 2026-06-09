need 9 select buttons with id to course

options:
on hover, slight highlight
on click event highlight, put into array

submit:
on click, take options from array put those into json, 
then post that raw body



cors - cross orig reso sharing

central JS state

central.js

- has variables like currentUserId

Or window.localStorage


>token v

register.js

const mockLoginResponse = {
    id: "Captain_Astro",
    token: "COSMOS-9921"
};

// 1. Save token and username into browser's vault
localStorage.setItem("spaceToken", mockLoginResponse.token);
localStorage.setItem("student", mockLoginResponse.id);


dashboard.js:
Every time a new page loads, this script runs at the absolute top of the file to check if they have permission to be there.

JavaScript
// 2. Look inside the vault for the token
const currentToken = localStorage.getItem("spaceToken");
const currentUser = localStorage.getItem("commander");

if (currentToken) {
    // They are logged in! Update the UI
    document.getElementById("welcome-banner").innerText = `Welcome back, ${currentUser}`;
} else {
    // Vault is empty! Kick them back to the login page
    window.location.href = "login.html";
}

// 3. Log Out Button Logic
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("spaceToken"); // Wipe the token
    localStorage.removeItem("commander");  // Wipe the name
    window.location.href = "login.html";   // Send them away
});

> cookies v

With cookies, you don't write code to handle them during fetch requests. The browser handles it behind the scenes.

Instead, cookies are usually read or created via a raw text string formatting interface on the browser object document.cookie.

Setting a Cookie manually (Simulating what a server does):
A cookie needs a key, a value, and an optional expiration time (so it doesn't delete the second the user closes the browser tab).

JavaScript
// Setting a cookie that expires in 1 hour
const loginUserViaCookie = () => {
    const cookieName = "session_id";
    const cookieValue = "GALAXY-COOKIE-777";
    const maxAgeSeconds = 3600; // 1 hour
    
    // The browser requires this exact string formatting:
    document.cookie = `${cookieName}=${cookieValue}; max-age=${maxAgeSeconds}; path=/;`;
    
    console.log("Cookie dropped safely into the browser's automatic system.");
};
Checking a Cookie across different pages:
Because document.cookie returns a single messy string of all cookies smashed together (e.g., "theme=dark; session_id=GALAXY-COOKIE-777; loggedIn=true"), checking it requires searching that string.

JavaScript
const checkSpaceCookie = () => {
    const allCookies = document.cookie;
    
    // Check if our specific session key exists anywhere in the text block
    if (allCookies.includes("session_id=GALAXY-COOKIE-777")) {
        console.log("Access Granted: Browser automatically verified the cookie.");
    } else {
        console.log("Access Denied: Redirecting to login page.");
        window.location.href = "login.html";
    }
};
Key takeaway to remember:
With localStorage, you are explicitly micro-managing the vault using .setItem() and .getItem().

With Cookies, once that string is saved, the browser will quietly attach it to the headers of every single backend request you send automatically without you ever typing it out again.








//potentially go into const.css

nav {
    height:
    
    position: sticky;
    etc 
    etc
}