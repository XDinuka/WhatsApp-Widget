class WhatsappWidget {
  static init(phoneNumber,personName,avatar,message) {
    document.querySelectorAll("div.whatsapp-widget").forEach(ww => {
      let chatdiv = document.createElement("div");
      chatdiv.className = "chat";
      ww.appendChild(chatdiv);
      

      chatdiv.addEventListener('click',()=>window.open('https://wa.me/'+phoneNumber, '_blank').focus());

      let chatheaderdiv = document.createElement("div");
      chatheaderdiv.className = "chatheader";
      chatdiv.appendChild(chatheaderdiv);

      let chatavatardiv = document.createElement("div");
      chatavatardiv.className = "chatavatar";
      chatavatardiv.style['background-image'] = "url("+avatar+")";
      chatheaderdiv.appendChild(chatavatardiv);

      let chatheadertext = document.createElement("span");
      chatheadertext.innerHTML = personName;
      chatheaderdiv.appendChild(chatheadertext);

      let chatbodydiv = document.createElement("div");
      chatbodydiv.className = "chatbody";
      chatdiv.appendChild(chatbodydiv);

      let chatmessagediv = document.createElement("div");
      chatmessagediv.className = "chatmessage";
      chatmessagediv.innerHTML = message;
      chatbodydiv.appendChild(chatmessagediv);

      let chatfooterdiv = document.createElement("div");
      chatfooterdiv.className = "chatfooter";
      chatdiv.appendChild(chatfooterdiv);

      let chatmessageboxdiv = document.createElement("div");
      chatmessageboxdiv.className = "chatmessagebox";
      chatmessageboxdiv.innerHTML = "<p>&nbsp;&nbsp;....</p>";
      
      chatfooterdiv.appendChild(chatmessageboxdiv);

      let chatmessagesenddiv = document.createElement("div");
      chatmessagesenddiv.className = "chatmessagesend";
      chatfooterdiv.appendChild(chatmessagesenddiv);


      let togglediv = document.createElement("div");
      togglediv.className = "toggle";
      ww.appendChild(togglediv);
      togglediv.addEventListener("click", () => {
        if (chatdiv.classList.contains("show")) {
          chatdiv.classList.add("pop");
          setTimeout(() => {
            chatdiv.classList.remove("pop");
            chatdiv.classList.remove("show");
          }, 100);
        } else {
          chatdiv.classList.add("show");
          chatdiv.classList.add("pop");
          setTimeout(() => chatdiv.classList.remove("pop"), 100);
        }
      });

      let toggleimgdiv = document.createElement("div");
      togglediv.appendChild(toggleimgdiv);

    });
  }
}
