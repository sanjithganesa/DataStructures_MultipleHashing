import "./styles.css";
import Heading from "/components/Heading";
import Footer from "/components/Footer";
import Theory from "/components/theory";
import { useState } from "react";
import React from "react";

export default function App() {
  //variable handle for hash1
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count21, setCount21] = useState(0);
  const [count22, setCount22] = useState(0);
  const [count23, setCount23] = useState(0);
  const [count24, setCount24] = useState(0);
  const [count25, setCount25] = useState(0);
  //variable handle for hash2

  //hash1(basic modulo)
  function hash1(num1) {
    var mod1 = num1 % 5;
    if (mod1 === 0) {
      setCount1(count1 + 1);
      setCount21(count21 + num1);
      console.log(count21);
    } else if (mod1 === 1) {
      setCount2(count2 + 1);
      setCount22(count22 + num1);
    } else if (mod1 === 3) {
      setCount4(count4 + 1);
      setCount24(count24 + num1);
    } else if (mod1 === 4) {
      setCount5(count5 + 1);
      setCount25(count25 + num1);
    } else {
      setCount3(count3 + 1);
      setCount23(count23 + num1);
    }
  }

  //hash2(function followed by modulo)
  //function used e^(ax) where a=3
  //please note that this uses a round off value to store the elements

  //variable handle for hash1
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count26, setCount26] = useState(0);
  const [count27, setCount27] = useState(0);
  const [count28, setCount28] = useState(0);
  const [count29, setCount29] = useState(0);
  const [count30, setCount30] = useState(0);

  function hash2(num1, num2) {
    var r = 2.7182818285 ** (num1 * num2);
    var mod2 = r % 5;
    if (mod2 === 0) {
      setCount6(count6 + 1);
      setCount26(count26 + num2);
    } else if (mod2 === 1) {
      setCount7(count7 + 1);
      setCount27(count27 + num2);
    } else if (mod2 === 3) {
      setCount8(count8 + 1);
      setCount28(count28 + num2);
    } else if (mod2 === 4) {
      setCount9(count9 + 1);
      setCount29(count29 + num2);
    } else {
      setCount10(count10 + 1);
      setCount30(count30 + num2);
    }
  }

  //variable handle for hash 3
  const [count11, setCount11] = useState(0);
  const [count12, setCount12] = useState(0);
  const [count13, setCount13] = useState(0);
  const [count14, setCount14] = useState(0);
  const [count15, setCount15] = useState(0);
  const [count31, setCount31] = useState(0);
  const [count32, setCount32] = useState(0);
  const [count33, setCount33] = useState(0);
  const [count34, setCount34] = useState(0);
  const [count35, setCount35] = useState(0);

  //polynomial function followed by modulo
  // function used here is a(x+(a(x+ax)))

  function hash3(num1, num2) {
    var c = num1;
    var d = num2;
    var s = c * (d + c * (d + c * d));
    var mod3 = s % 5;
    if (mod3 === 0) {
      setCount11(count11 + 1);
      setCount31(count31 + num2);
    } else if (mod3 === 1) {
      setCount12(count12 + 1);
      setCount32(count32 + num2);
    } else if (mod3 === 3) {
      setCount13(count13 + 1);
      setCount33(count33 + num2);
    } else if (mod3 === 4) {
      setCount14(count14 + 1);
      setCount34(count34 + num2);
    } else {
      setCount15(count15 + 1);
      setCount35(count35 + num2);
    }
  }

  //variable handle for hash4
  const [count16, setCount16] = useState(0);
  const [count17, setCount17] = useState(0);
  const [count18, setCount18] = useState(0);
  const [count19, setCount19] = useState(0);
  const [count20, setCount20] = useState(0);
  const [count36, setCount36] = useState(0);
  const [count37, setCount37] = useState(0);
  const [count38, setCount38] = useState(0);
  const [count39, setCount39] = useState(0);
  const [count40, setCount40] = useState(0);

  //hash4 sine function

  function hash4(num1) {
    var t = Math.sin((num1 * 3.141593) / 180);
    var mod4 = t % 5;
    if (mod4 === 0) {
      setCount16(count16 + 1);
      setCount36(count36 + num1);
    } else if (mod4 === 1) {
      setCount17(count17 + 1);
      setCount37(count37 + num1);
    } else if (mod4 === 3) {
      setCount18(count18 + 1);
      setCount38(count38 + num1);
    } else if (mod4 === 4) {
      setCount19(count19 + 1);
      setCount39(count39 + num1);
    } else {
      setCount20(count20 + 1);
      setCount40(count40 + num1);
    }
  }

  function trigger(event) {
    var randomx = document.getElementById("inputDefault1").value;
    var randoma = document.getElementById("inputDefault2").value;
    hash1(randomx);
    hash2(randoma, randomx);
    hash3(randoma, randomx);
    hash4(randomx);
  }
  return (
    <div className="App">
      <Heading />
      <br />
      <br />
      <Theory />
      <div id="model">
        <form onSubmit={trigger}>
          <div class="form-group">
            <label class="col-form-label mt-4" for="inputDefault">
              Integer Input
            </label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter value for x"
              id="inputDefault1"
            />
            <br />
            <input
              type="number"
              class="form-control"
              placeholder="Enter value for a"
              id="inputDefault2"
            />
          </div>
          <br />
          <a href="#tabular">
            <button type="Submit" class="btn btn-light">
              "Click here to view Model"
            </button>
          </a>
          <br />
          <br />
          <div>
            <table class="table table-hover">
              <thead>
                <tr id="tabular">
                  <th scope="col">Function↓/Hash memory sapce→</th>
                  <th scope="col">0</th>
                  <th scope="col">1</th>
                  <th scope="col">2</th>
                  <th scope="col">3</th>
                  <th scope="col">4</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-primary">
                  <th scope="row">(x) mod5</th>
                  <td>{count1}</td>
                  <td>{count2}</td>
                  <td>{count3}</td>
                  <td>{count4}</td>
                  <td>{count5}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">round((e^(ax))) mod5</th>
                  <td>{count6}</td>
                  <td>{count7}</td>
                  <td>{count8}</td>
                  <td>{count9}</td>
                  <td>{count10}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">(a(x+(a(x+ax)))) mod5</th>
                  <td>{count11}</td>
                  <td>{count12}</td>
                  <td>{count13}</td>
                  <td>{count14}</td>
                  <td>{count15}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">sine((x*pi)/180) mod5</th>
                  <td>{count16}</td>
                  <td>{count17}</td>
                  <td>{count18}</td>
                  <td>{count19}</td>
                  <td>{count20}</td>
                </tr>
              </tbody>
            </table>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Memory location</th>
                  <th scope="col" colspan="4">
                    stack stored
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-primary">
                  <th scope="row">0,0</th>
                  <td colspan="4">{count21}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">0,1</th>
                  <td colspan="4">{count22}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">0,2</th>
                  <td colspan="4">{count23}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">0,3</th>
                  <td colspan="4">{count24}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">0,4</th>
                  <td colspan="4">{count25}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">1,0</th>
                  <td colspan="4">{count26}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">1,1</th>
                  <td colspan="4">{count27}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">1,2</th>
                  <td colspan="4">{count28}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">1,3</th>
                  <td colspan="4">{count29}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">1,4</th>
                  <td colspan="4">{count30}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">2,0</th>
                  <td colspan="4">{count31}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">2,1</th>
                  <td colspan="4">{count32}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">2,2</th>
                  <td colspan="4">{count33}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">2,3</th>
                  <td colspan="4">{count34}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">2,4</th>
                  <td colspan="4">{count35}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">3,0</th>
                  <td colspan="4">{count36}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">3,1</th>
                  <td colspan="4">{count37}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">3,2</th>
                  <td colspan="4">{count38}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">3,3</th>
                  <td colspan="4">{count39}</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">3,4</th>
                  <td colspan="4">{count40}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>

      <Footer />
      <h5> No copyrights imposed </h5>
    </div>
  );
}
