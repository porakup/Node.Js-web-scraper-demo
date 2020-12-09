const request = require("request-promise");

const param = process.argv[2];

async function main(){

    let resp = await request.get("https://codequiz.azurewebsites.net/",{
        "headers": {
          "cookie": "hasCookie=true"
        }
      });

    let html = resp.toString().trim();

    let step1 = html.slice(html.indexOf(param));

    let step2 = step1.slice(step1.indexOf('<td>'));

    let nav = step2.slice(4,step2.indexOf('</td>'));


    console.log(nav);


}


main()