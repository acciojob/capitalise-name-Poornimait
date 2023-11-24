//your JS code here. If required.
 document.addEventListener('DOMContentLoaded', function () {
            // Function to convert input value to uppercase
            function convertToUppercase() {
                var inputField = document.getElementById('fname');
                inputField.value = inputField.value.toUpperCase();
            }

            // Add event listener to the input field
            var inputField = document.getElementById('fname');
            inputField.addEventListener('blur', convertToUppercase);
        });