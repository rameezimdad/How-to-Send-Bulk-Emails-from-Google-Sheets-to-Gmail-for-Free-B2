function welcomeMessage(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var Range = sheet.getRange("A2:B2");
  var data = Range.getValues();
  data.forEach(function (rowData) {
    
    var templ = HtmlService.createTemplateFromFile('Welcome-Email');
    var changes = 
      {
        name: rowData[0],
        emailAddress: rowData[1],
        chapterName: 'Astoe Student Club Wordpress Course',
        noOfEvent: 'first',
        dayOfEvent: 'today',
        timeOfEvent: '8 PM',
        eventLink: 'https://www.astoecompany.com',
        poweredBy: 'Astoe',
        chapterWebsite: 'https://www.astoecompany.com'
      };
    
    templ.changes = changes;
    var message = templ.evaluate().getContent();
  
  MailApp.sendEmail({
    to: changes.emailAddress,
    subject: "Astoe Wordpress Event",
    htmlBody: message
  });
  })
}

function feedbackMessage(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var Range = sheet.getRange("C3:D3");
  var data = Range.getValues();
  data.forEach(function (rowData) {
    
    var templ = HtmlService.createTemplateFromFile('Feedback-Email');
    var changes = 
      {
        name: rowData[0],
        emailAddress: rowData[1],
        feedbackForm: 'https://www.astoecompany.com',
        chapterName: 'Astoe Student Club Wordpress Course',
        eventTitle: 'Intro to Wordpress Development Course',
        qwiklabsForm: 'place-link-here',
        poweredBy: 'Astoe',
        chapterWebsite: 'https://www.astoecompany.com'
      };
    
    templ.changes = changes;
    var message = templ.evaluate().getContent();
  
  MailApp.sendEmail({
    to: changes.emailAddress,
    subject: "Astoe Event Feedback",
    htmlBody: message
  });
  })  
}
