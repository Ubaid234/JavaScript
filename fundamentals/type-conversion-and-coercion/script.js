      let val;

      // Number to String
      val = String(555);
      val = String(4 + 4);

      // Boolean to String
      val = String(true);

      // Date to String
      val = String(new Date());

      // Array to String
      val = String([1, 2, 3, 4, 5]);

      // toString()
      val = (5).toString();
      val = true.toString();

      // String to Numbers

      val = Number("5");
      val = Number(true);
      val = Number(false);
      val = Number(null);
      val = Number("hello");
      val = Number([1, 2, 3, 4]);

      val = parseInt(100.2);
      val = parseFloat(200.4);
      val = parseFloat(200.38);

      //  Output
      // console.log(val);
      // console.log(typeof val);
      // // console.log(val.length);
      // console.log(val.toFixed(2));

      const val1 = String(5);
      const val2 = 3;
      const sum = val1 + val2;

      console.log(sum);
      console.log(typeof sum);