## Shkel Egor

**Phone:** +375 (25) 731-87-85  
**Email:** skelegor8@gmail.com

### About me

I graduated from Minsk Radioengineering College in 2013 and I graduated from Belarusian State University of Informatics and Radioelectronics in 2021. My major is system engineer. I've learned English language for 1 years. I studied English at the International House. Now I’m learning English at home with Cambridge’s book by Muyphy. I sometimes listen to the radio. I have a pre-intermediate level. I enjoy learning English

My specialty in college was programming. When I graduated from college, I decided to go to university and study systems engineering. I had different subjects, for example, control programming, testing, creating interface templates, etc.I think that studying at the university is more interesting than in college. The teachers at the college were very young and did not know their subject, but we have good teachers at the university.

### Code examples

```javascript
function nicknameGenerator(name) {
  if (name.length < 4) {
    name = "Error: Name too short";
    return name;
  } else {
    if (
      name[2] === "a" ||
      name[2] === "e" ||
      name[2] === "i" ||
      name[2] === "o" ||
      name[2] === "u"
    ) {
      return name.slice(0, 4);
    } else {
      return name.slice(0, 3);
    }
  }
}
```

```javascript
function isIsogram(str) {
  let strSlice = str.toLowerCase();
  str = str.toLowerCase();
  let isIsogramBool;
  if (str === "") {
    isIsogramBool = true;
  }
  for (let i = 0; i < str.length; i++) {
    strSlice = str.slice(i + 1);
    if (strSlice.indexOf(str[i]) === -1) {
      isIsogramBool = true;
    } else {
      isIsogramBool = false;
      break;
    }
  }
  str = isIsogramBool;
  return str;
}
```

### Work experience

Now I’m working as a specialist in search engine optimization for an online store. I promote the website in the search engines Google and Yandex. This sphere is dying. Because buying ads in Google and Yandex search engines is much more profitable.
I have tasks such as: taking photo of products, writing technical documentation for copywriter and programmer.

### Education

Secondary vocational 2013 - 2017. Minsk State Higher Radio Engineering College, Minsk.  
**Speciality:** Programming Technician.

Higher (Evening) 2017 - 2021 Institute of Information Technologies, Belarusian State University of Informatics and Radioelectronics, Minsk.  
**Speciality:** Systems engineer.

**Language skills:** Russian – native, English – Pre-intermediate.
