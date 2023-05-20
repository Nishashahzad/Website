
/*responsive navbar   cross*/

const bar = document.querySelector(".fa-bars");
bar.onclick = function(){
 const nav = document.querySelector(".list");
nav.classList.add("active");

  const cross = document.getElementById("cross");
cross.onclick = function(){
  const nav = document.querySelector(".list");
 nav.classList.remove("active");
}

}


/*slides*/
var counter = 1;
setInterval(function () {
    var radio = document.getElementById('radio' + counter);
    if (radio) {
        radio.checked = true;
    }
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);


/* search operation*/
  const pages = {
    page1: {title: "Our Team", url: "our_Team.html"},
    page2: {title: "Career", url: "career.html"},
    page3: {title: "Blog", url: "blog.html"},
    page4: {title: "Company", url: "company.html"},
    page5: {title: "Achievements", url: "Achievements.html"},
    page6: {title: "Web App", url: "web_development.html"},
    page7: {title: "Mobile App", url: "Mobile_Development.html"},
    page8: {title: "IT Strategies", url: "IT_strategy.html"},
    page9: {title: "Desktop App", url: "desktopApp.html"},
    page10: {title: "UI/UX Design", url: "ui_ux_Design.html"},
    page11: {title: "Admin/User Panel", url: "Admib_user_panel.html"},
    page12: {title: "Bugs / Viruses Detective", url: "busg_viruses_detective.html"},
    page13: {title: "Artificial Intelligence", url: "Artificial_Intelligence.html"} 
  };
  
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.querySelector('.searchResults');
  let timeoutId;
  
  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    
    if (query.length < 1) {
      searchResults.style.visibility = "visible";
      searchResults.style.opacity = 1;
      return;
    }
    
    const matches = Object.entries(pages).filter(([key, value]) => {
      return value.title.toLowerCase().includes(query);
    });
    
    if (matches.length === 0) {
      searchResults.innerHTML = '<p>No results found</p>';
      searchResults.style.visibility = "hidden";
      searchResults.style.opacity = 0;
      return;
    }
  
    const html = matches.map(([key, value]) => {
      return `<a href="${value.url}">${value.title}</a>`;
    }).join('');
    
    searchResults.innerHTML = html;
  });
  
  searchInput.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    timeoutId = null;
  });
  
  searchInput.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      searchResults.innerHTML = '';
      searchResults.style.visibility = "hidden";
      searchResults.style.opacity = 0;
    }, 20);
  });
  
  searchResults.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    timeoutId = null;
  });
  
  searchResults.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      searchResults.innerHTML = '';
      searchResults.style.visibility = "hidden";
      searchResults.style.opacity = 0;
    }, 20);
  });

/*responsive search*/

  const searchInput2 = document.getElementById('searchInput2');
  const searchResults2 = document.querySelector('.searchResults2');
  let timeOutId;
  
  searchInput2.addEventListener('keyup', () => {
    const query = searchInput2.value.trim().toLowerCase();
    searchResults2.innerHTML = '';
    
    if (query.length < 1) {
      searchResults2.style.visibility = "visible";
      searchResults2.style.opacity = 1;
      return;
    }
    
    const matches = Object.entries(pages).filter(([key, value]) => {
      return value.title.toLowerCase().includes(query);
    });
    
    if (matches.length === 0) {
      searchResults2.innerHTML = '<p>No results found</p>';
      searchResults2.style.visibility = "hidden";
      searchResults2.style.opacity = 0;
      return;
    }
  
    const html = matches.map(([key, value]) => {
      return `<a href="${value.url}">${value.title}</a>`;
    }).join('');
    
    searchResults2.innerHTML = html;
  });
  
  searchInput2.addEventListener('mouseenter', () => {
    clearTimeout(timeOutId);
    timeOutId = null;
  });
  
  searchInput2.addEventListener('mouseleave', () => {
    timeOutId = setTimeout(() => {
      searchResults2.innerHTML = '';
      searchResults2.style.visibility = "hidden";
      searchResults2.style.opacity = 0;
    }, 20);
  });
  
  searchResults2.addEventListener('mouseenter', () => {
    clearTimeout(timeOutId);
    timeOutId = null;
  });
  
  searchResults2.addEventListener('mouseleave', () => {
    timeOutId = setTimeout(() => {
      searchResults2.innerHTML = '';
      searchResults2.style.visibility = "hidden";
      searchResults2.style.opacity = 0;
    }, 20);
  });






/*schedule an appointment*/
window.addEventListener('DOMContentLoaded', function() {
  const scheduleBtn = document.getElementById('schedule');
  const formDiv = document.getElementById('formDiv');
  const half = document.getElementById('half');
  const complete = document.getElementById('complete');

  scheduleBtn.addEventListener('click', function() {
    if (formDiv.style.display === 'none') {
      formDiv.style.display = 'block';
    } else {
      formDiv.style.display = 'none';
    }
  });
});


function submitForm() {
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const reason = document.getElementById("reason").value;
  
  // Do something with the form data, like send it to a server
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
  console.log("Reason for Appointment: " + reason);
  
  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("reason").value = "";
}

/*chatbot*/

const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWidget = document.getElementById("chatbot-widget");
const chatbotClose = document.getElementById("chatbot-close");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotForm = document.getElementById("chatbot-form");
const chatbotInput = document.getElementById("chatbot-input");

// Initialize the chatbot conversation
let conversation = [
  {
    message: "Hi there! How can I help you today?",
    sender: "bot"
  }
];

// Renders the chatbot messages in the chat window
function renderMessages() {
  chatbotMessages.innerHTML = "";
  conversation.forEach((message) => {
    const div = document.createElement("div");
    div.classList.add("message", message.sender);
    div.innerHTML = `<p>${message.message}</p>`;
    chatbotMessages.appendChild(div);
  });
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Sends a user message to the chatbot
function sendMessage(event) {
  event.preventDefault();
  const message = chatbotInput.value.trim();
  if (message === "") {
    return;
  }
  conversation.push({
    message: message,
    sender: "user"
  });
  chatbotInput.value = "";
  renderMessages();
  // Simulate a response from the chatbot after 1 second
  setTimeout(() => {
    conversation.push({
      message: "I'm sorry, I don't understand. Could you please try asking your question in a different way?",
      sender: "bot"
    });
    renderMessages();
  }, 1000);
}

chatbotIcon.addEventListener("click", () => {
  chatbotWidget.style.display = "block";
  renderMessages();
});

chatbotClose.addEventListener("click", () => {
  chatbotWidget.style.display = "none";
});

chatbotForm.addEventListener("submit", sendMessage);


/*numbers strt form zero */
$(window).on('scroll', function() {
  var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + $(window).height();
  var sectionOffset = $('#B').offset().top;
  var sectionHeight = $('#B').height();

  if (windowTop <= sectionOffset + sectionHeight && windowBottom >= sectionOffset) {
    if (!$('#B').hasClass('animation-started')) {
      startCounterAnimation();
      $('#B').addClass('animation-started');
    }
  }
});

function startCounterAnimation() {
  $('.Single').each(function() {
    var $this = $(this);
    $({ Counter: 0 }).animate(
      {
        Counter: parseFloat($this.text()),
      },
      {
        duration: 1000,
        easing: 'swing',
        step: function() {
          $this.text(Math.ceil(this.Counter) + '%');
        },
      }
    );
  });
}

