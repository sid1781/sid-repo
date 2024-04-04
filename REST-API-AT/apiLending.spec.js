authorization:
authenticator:



3+4+13=20



 ./env-manager daily-pipeline --env=kbuatauto --instance=2 --aws-profile=uatauto --backend-build-root=cf6c9c0b-f536-4f04-9442-0c65a4189cdc  --frontend-build-root=devops-full-fe-mono-repo-v2:4893f246-fb58-4d7f-9ad7-e0cbed41343a-2023-09-08_07:45:38 --mail-list='siddeshwar.mali@krazybee.com,monisha.nethaji@krazybee.com'  --api-test-branch= --ui-test-branch=p2-josh-system-cases  --no-dbclone  --codebuild-aws-account=stage  --just-describe('API Lending', () => {

    const randomEmail = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
    console.log(randomEmail)
    const randomMobile = `9${Math.floor(Math.random() * 1000000000)}`;
    console.log(randomMobile)
    const apiUrl = 'https://kbuatauto2api.kreditbee.dev/main/lead/token';


    it('API Lending Test Case', () => {
        // Define the API endpoint URL
        
        // Define the request payload
        const requestBody = {
            mobile:randomMobile,
            email: randomEmail,
            schemeName: 'paisabazaarV1',
        };

        // Make the HTTP POST request
        cy.request({
            method: 'POST',
            url: apiUrl,
            headers: {
                Authorization: 'Basic cGFpc2FiYXphYXI6cGFzc3dvcmQ=',
                'Content-Type': 'application/json',
            },
            body: requestBody,
        }).then((response) => {
            // Log the response body to the Cypress console
        cy.log(response.body)
        const josn=JSON.stringify(response.body)
          cy.log(josn)
        });

    })
})test --api-test=false  --force --test-id=24