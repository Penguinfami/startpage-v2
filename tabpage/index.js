let content = `<!Jira
https://basis.atlassian.net/jira/software/c/projects/BP/boards/36
https://cdn.worldvectorlogo.com/logos/jira-1.svg
<!Stash
https://stash.centro.net/projects/CEN/repos/centro-media-manager/browse
https://wac-cdn.atlassian.com/dam/jcr:a7a6a501-1329-4543-b204-093584908134/Bitbucket@2x-icon-blue.png
<!Outlook
https://outlook.office.com/mail/
https://i.pinimg.com/originals/97/c4/18/97c418f388a3079c1b83959341795548.png
<!Sharepoint
https://centrohub.sharepoint.com/sites/IntranetHome
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg/1049px-Microsoft_Office_SharePoint_%282019%E2%80%93present%29.svg.png
<!Harness
https://app.harness.io/
https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=contain,w=200,h=200,q=100/https://builtin.com/sites/www.builtin.com/files/2021-05/Harness%20Logo.png
<!Confluence
https://basis.atlassian.net/wiki/home
https://images.saasworthy.com/confluence_137_logo_1721128513_5owv2.png
<!Local Environment
localhost:3000
https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Blue_computer_icon.svg/2048px-Blue_computer_icon.svg.png
<!Workday
https://wd5.myworkday.com/centro/d/home.htmld
https://images.seeklogo.com/logo-png/48/3/workday-logo-png_seeklogo-480431.png
<!Lucidchart
https://lucid.app/
https://assets.asana.biz/transform/f0b09614-d61a-44d7-9ad8-339aada76c64/logo-lucidchart
<!Datadog
https://app.datadoghq.com/apm/home
https://static-00.iconduck.com/assets.00/datadog-icon-1915x2048-i5fk5tcw.png
<!Slack
app.slack.com
https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png
>@Stash
CMM
https://stash.centro.net/projects/CEN/repos/centro-media-manager/browse
https://wac-cdn.atlassian.com/dam/jcr:a7a6a501-1329-4543-b204-093584908134/Bitbucket@2x-icon-blue.png
C3PO
https://stash.centro.net/projects/CEN/repos/credentials-for-third-party-oauth-service/browse
https://wac-cdn.atlassian.com/dam/jcr:a7a6a501-1329-4543-b204-093584908134/Bitbucket@2x-icon-blue.png
`

let sections = content.trim().split(/[><]/).slice(1)
console.log(sections)
let lines = sections.map(section => section.trim().split('\n'))
console.log(sections)
console.log(lines)
let courseListNav = document.querySelector('.nav');

let section = courseListNav;

let linksList;

let current;

let currentType = ''

const pageType = window.location.href;
console.log(pageType)
for (let i = 0; i < lines.length; i++){
    console.log(lines[i])
    let j = 0;
    while (j < lines[i].length){
        if (j == 0){
            currentType = lines[i][0].slice(0,1)
            console.log(`currenttype=${currentType}`)
            section = document.createElement('li')
            section.classList.add('section')
            //section.style.float = 'right'; //i % 2 == 1 ? 'left': 'right'
            let title = document.createElement('div')
            title.classList.add('title')
            if (currentType == '@') {
                title.innerText = lines[i][0].slice(1)
            } else {
                lines[i][0] = lines[i][0].slice(1)
                lines[i].splice(0,0,'')
            }
            linksList = document.createElement('ul')
            linksList.classList.add('links')
            section.appendChild(title)
            section.appendChild(linksList)   
            courseListNav.appendChild(section)   
        } else {
            console.log(j)
            switch((j - 1) % 3 ){
                case 0:
                    let newLink = document.createElement('a')
                    newLink.innerText = lines[i][j]
                    newLink.style.fontSize = currentType == '!' ? '1.8rem' : '1.5rem'
                    listItem = document.createElement('li')
                    listItem.classList.add('link')
                    listItem.append(newLink)
                    linksList.appendChild(listItem)
                    current = newLink
                    break;
                case 1:
                    if (!pageType.includes("tab"))
                        current.setAttribute('target', '_blank')
                    current.setAttribute('href', lines[i][j])
                    break;
                case 2:
                    let logo = document.createElement('img')
                    logo.style.width = currentType == '!' ? '3.7rem' : '2.1rem';
                    logo.style.height = currentType == '!' ? '3.7rem' : '2.1rem';
                    logo.style.borderRadius = "25%"
                    console.log(lines[i][j])
                    logo.setAttribute('src', lines[i][j])
                    current.prepend(logo)
                    break;    
    
            }
        }
        j++;
        


        
    }
}
