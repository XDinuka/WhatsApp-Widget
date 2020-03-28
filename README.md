# WhatsApp Widget
**version 1.0**

This element will open a whatsapp convaersation to the provided phone number.

## Usage

* Include whatsapp-widge js and css file.
* Add an empty div with class whatsapp-widget to the page.
```
<div class="whatsapp-widget"></div>
```
* Initialize the component as shown in the example below.

```
     WhatsappWidget.init(
          "0011122223333",
          "John Doe",
          "assets/Person.png",
          "How can I help you?"
     );
```
parameter description
* Your phone number
* Your name
* Your avatar
* Your welcome message

All paramters are required.

