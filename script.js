document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData"); 
    const themeToggle = document.getElementById("themToggle"); 
    const favoriteIcone = document.getElementById("favoriteIcone"); 
    const form = document.getElementById("form");  

     
     
 
    // 1. Toggle Theme
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
    
    // 2. Favorite Icon Toggle
    document.querySelectorAll('.favorite-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            icon.textContent = icon.textContent === '❤️' ? '🤍' : '❤️';
        });
    });
    
    // 3. Simple Form Validation
    document.querySelector('form').addEventListener('submit', function (e) {
        const name = this.querySelector('input[placeholder="Your Name"]').value;
        const email = this.querySelector('input[placeholder="Your Email"]').value;
        const message = this.querySelector('textarea').value;
        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            e.preventDefault();
        }
    });
    
    // 4. View More Alert
    const viewMore = document.querySelector('p.hover\\:text-orange-400');
    if (viewMore) {
        viewMore.addEventListener('click', () => {
            alert('More products coming soon!');
        });
    }
    
    // 5. Add greeting based on time of day
    const greeting = document.createElement('p');
    const hour = new Date().getHours();
    greeting.textContent =
        hour < 12 ? 'Good Morning!' :
        hour < 18 ? 'Good Afternoon!' : 'Good Evening!';
    greeting.className = 'text-xl font-semibold text-orange-600 mt-4';
    document.querySelector('header')?.prepend(greeting);
    
    // 6. Hover Zoom for Images
    document.querySelectorAll('img').forEach(img => {
        img.style.transition = 'transform 0.3s ease';
        img.addEventListener('mouseover', () => img.style.transform = 'scale(1.05)');
        img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
    });
  
    


    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});



        document.addEventListener("DOMContentLoaded", () => {
            const signupForm = document.getElementById("signupForm");
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const savedName = document.getElementById("savedName");
            const savedEmail = document.getElementById("savedEmail");
            const clearDataButton = document.getElementById("clearData");

            // 1. Validate Email Format
            function isValidEmail(email) {
                const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return pattern.test(email);
            }

            // 2. Capitalize First Letter of Each Word
            function capitalizeName(name) {
                return name.replace(/\b\w/g, char => char.toUpperCase());
            }

            // 3. Show Error Message Below Form
            function showError(message) {
                const errorBox = document.getElementById("errorBox");
                errorBox.textContent = message;
                errorBox.style.color = "red";
            }

            // 4. Check for Empty Fields
            function isFormComplete(name, email, password) {
                return name !== "" && email !== "" && password !== "";
            }

            // 5. Generate Random User ID (Optional for future enhancements)
            function generateUserID() {
                return "user_" + Math.floor(Math.random() * 1000000);
            }

            // 6. Show Saved Data in Console
            function logSavedData() {
                console.log("Saved Name:", localStorage.getItem("userName"));
                console.log("Saved Email:", localStorage.getItem("userEmail"));
            }

            // Load saved data when the page loads
            if (localStorage.getItem("userName")) {
                savedName.textContent = "Name: " + localStorage.getItem("userName");
                savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
            }

            signupForm.addEventListener("submit", (event) => {
                event.preventDefault(); // Prevent form submission

                const name = capitalizeName(nameInput.value.trim());
                const email = emailInput.value.trim();
                const password = passwordInput.value.trim(); // Not saving password

                if (!isFormComplete(name, email, password)) {
                    showError("Please fill in all fields.");
                    return;
                }

                if (!isValidEmail(email)) {
                    showError("Invalid email format.");
                    return;
                }

                // Save user data in localStorage
                localStorage.setItem("userName", name);
                localStorage.setItem("userEmail", email);

                // Display saved data
                savedName.textContent = "Name: " + name;
                savedEmail.textContent = "Email: " + email;
                alert("Sign-up successful! Data saved.");

                // Log saved data to the console
                logSavedData();

                // Clear input fields after saving
                nameInput.value = "";
                emailInput.value = "";
                passwordInput.value = "";
            });

            // Clear data button
            clearDataButton.addEventListener("click", () => {
                localStorage.clear();
                savedName.textContent = "";
                savedEmail.textContent = "";
                alert("Data cleared.");
            });
        });

        
        const toggleBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
      
        // Load theme from localStorage
        if (localStorage.getItem('theme') === 'dark') {
          html.classList.add('dark');
        }
      
        toggleBtn.addEventListener('click', () => {
          html.classList.toggle('dark');
          const isDark = html.classList.contains('dark');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        }); 
         


  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("border-orange-400");
    });
  });
   




    
 