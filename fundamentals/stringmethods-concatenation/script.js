const firstName = "William";
      const lastName = "Johnson";
      const age = 34;
      const str = "Hello there, my name is Brad ";
      const tags = "web design, web development, web program";
      let val;

      val = firstName + lastName;

      // concatenation
      val = firstName + " " + lastName;

      // Append

      val = "Brad ";
      val += "Traversy";

      val = "Hello, my name is " + firstName + " and I am " + age;

      //Escaping

      val = "That's awesome, I can't wait";

      //Length
      val = firstName.length;

      // concat
      val = firstName.concat(" ", lastName);

      // Change case

      val = firstName.toUpperCase();
      val = firstName.toLowerCase();

      val = firstName[3]; //   Gives the value

      // indexOf()
      val = firstName.indexOf("l");
      val = firstName.lastIndexOf("l");

      // charAT()
      val = firstName.charAt("2");

      // Get last char
      val = firstName.charAt(firstName.length - 1);

      // substring()
      val = firstName.substring(0, 4);

      //slice()
      val = firstName.slice(0, 4);
      val = firstName.slice(-3);

      // split()
      val = str.split(" ");
      val = tags.split(",");

      // replace()
      val = str.replace("Brad", "jack");

      //inlcudes()
      val = str.includes("Brad");
      val = str.includes("no");

      console.log(val);