//To upadte the Values directly in Db We need To use this Scripts

describe("Kreditbee Admin Panel", () => {
    it.only('TO Update the value of PreloanRe=0 in yp.yp_config table', () => 
    {
            //cy.visit('/login', {failOnStatusCode: false});
    
            const DBurl="https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
            cy.log("DBurl :"+DBurl);
            const dbip="10.50.40.18";
            cy.log("dbip :"+dbip);
      //Json Format queries

      //UPDATE yp.yp_band_properties SET enable='1',penaltyProductId='10' WHERE productid='13' and band='1070' and subband='8';
            var payload = {"query":"UPDATE `yp`.`yp_user` SET `state` = '53',`substate`='93',`isSAEnabled`='1',`isCardEnabled`='1',`ecommerceEnabled`='1' WHERE `id`='96656376'","db_ip":"10.50.40.18"};
            cy.log(payload)
            cy.task('query', `SELECT *  FROM yp_user  WHERE id="96656376"`).then((result) => {
               expect(result[0].fname).to.equal('Siddeshwar')
           })
      
            cy.request('POST', DBurl, payload).then((resp) => 
            {
               cy.wait(1000)
               cy.log(resp.status)
               cy.log(resp.body['body'])
            })

    });
    it('To update the isTest =1 in yp.yp_user Table', () =>
    { 
        const DBurl= "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        cy.log("DBurl :"+DBurl);
        const dbip ="10.50.40.98";
        cy.log("dbip :"+dbip);
        //Json format to update the table
        //syntax cy.request(method, url, body)
        var payload = {"query":"UPDATE `yp`.`yp_dsign_config` SET `value` = '1' WHERE `id`='8'","db_ip":"10.50.40.98"};


        cy.request('POST', DBurl, payload).then((resp) => 
            {
               cy.wait(1000)
               cy.log(resp.status)
               cy.log(resp.body['body'])
            })
    })
    it('To Enable  the Esign option in env', () =>
    { 
        const DBurl= "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        cy.log("DBurl :"+DBurl);
        const dbip ="10.50.40.14";
        cy.log("dbip :"+dbip);
        //Json format to update the table
        //syntax cy.request(method, url, body)
        var payload = {"query":"UPDATE `yp`.`yp_dsign_config` SET `value` = '1' WHERE `id`='8'","db_ip":"10.50.40.14"};
        var payload1 = {"query":"UPDATE `yp`.`yp_dsign_config` SET `value` = '1' WHERE `id`='9'","db_ip":"10.50.40.14"};


        cy.request('POST', DBurl, payload).then((resp) => 
            {
               cy.wait(1000)
               cy.log(resp.status)
               cy.log(resp.body['body'])
            })
            cy.request('POST', DBurl, payload1).then((resp) => 
            {
               cy.wait(1000)
               cy.log(resp.status)
               cy.log(resp.body['body'])
            })
    })
    

})

// const DBurl =""
// cy.log("DBurl :"+DBurl )
// const DBip=""
// cy.log("DBip :"+DBip)

// var payload ={"query":"UPDATE `yp`.`yp_user` set `isTest`='1' where `id`='12'","DB_ip":"10.50.40.14"}
// cy.request('POST',DBurl,payload).then((resp) =>{
//         cy.wait(1000)
//         cy.log(resp.status)
//         cy.log(resp.body['body'])
// })

describe('KB Login', () => {
    it('Login With Mobile Number', () => {

        const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        const mobilenum = "8073874189"
        const dbip = "10.105.60.210"
        cy.visit('/login', { failOnStatusCode: false });
        cy.log('navigated to login page');
        cy.contains('span','Login/Signup with Mobile').click({ force: true });
        cy.url().should('include', '/loginwithmob/mobileform');
        cy.get('input')
            .should('be.visible')
            .and('have.attr', 'placeholder', '10 digit mobile number')
            .and('have.attr', 'maxlength', '10')
            .next()
            .prev()
            .type(mobilenum);
        cy.get('[data-cy="checkboxText"]').click()
        cy.wait(1000);
        cy.get('[data-cy="app.components.Common.continue_btn_caps"]')
            .click();
        cy.wait(4000);
        cy.url().should('include', '/loginwithmob/otpvalidation');

        cy.log("DBurl :" + DBurl);
        cy.log("mobilenum :" + mobilenum);
        cy.log("dbip :" + dbip);

        //SELECT otp from yp_user_otp  WHERE sentTo =8073874189  order by id desc limit 10
        var payload = { "query": "SELECT otp from `yp_user_otp` WHERE `sentTo` ='8073874189' order by id desc limit 1", "db_ip": "10.105.60.210" };
        cy.log(payload)
        cy.wait(3000)
        cy.request('POST', 'https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest', payload).then((resp) => {
            cy.wait(4000)
            cy.log(resp.status)
            cy.log(resp.body['body'])
            cy.wait(1000)
            const sixdigitotp = resp.body['body'];
            var rx = "\\d{6}"
            var otp = parseInt(sixdigitotp.match(rx))
            cy.log("OTP :" + otp)
            cy.get('input')
                .should('be.enabled')
                .and('have.attr', 'placeholder', 'Enter OTP Here')
                .click()
                .type(otp);
        })
        cy.wait(2000);
    })
    it.only('To delete a record which has a foreign key ', () => {

        const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        const mobilenum = "9611290254"
        const dbip = "10.105.60.131"
       
        cy.log("DBurl :" + DBurl);
        cy.log("mobilenum :" + mobilenum);
        cy.log("dbip :" + dbip);

        //SELECT otp from yp_user_otp  WHERE sentTo =8073874189  order by id desc limit 10
        var payload = { "query": "delete from `yp`.`yp_user_otp` where `uid` ='81183779'", "db_ip": "10.105.60.131" };
        var payload1 = { "query":"delete from `yp`.`yp_user` where `id` ='81183779'", "db_ip":"10.105.60.131"}
    
        cy.request('POST', 'https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest', payload).then((resp) => {
           
        cy.log(resp.status)
        cy.log(resp.body['body'])
        })
        cy.request('POST', 'https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest', payload1).then((resp) => {
           
        cy.log(resp.status)
        cy.log(resp.body['body'])
        })
        cy.wait(2000);
    })
   
})
