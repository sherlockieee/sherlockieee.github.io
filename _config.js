module.exports = {
  /** Site MetaData (Required all)*/
  title: `Ha (sherlockieee)`,                           // (* Required)
  description: `Thoughts, loosely organized.`,          // (* Required)
  author: `Ha`,                         // (* Required)
  language: 'en',                        // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: 'https://sherlockieee.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: 'icon.png', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Thoughts, loosely organized.',
  name: 'Ha Tran Nguyen Phuong',
  company: 'Minerva University',
  location: 'Berlin, Germany',
  email: 'phuonghatrannguyen00@gmail.com',
  website: '',           // ex.'https://junhobaik.github.io'
  linkedin: 'https://www.linkedin.com/in/trannguyenphuongha/',                                                       
  facebook: '',                                                          
  instagram: '',                                                         
  github: 'https://github.com/sherlockieee',                                                           

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: '',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: '', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: '', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
