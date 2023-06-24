// 사진 0: <a href="https://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/cc0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@harrson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Den Harrson</a>
// 사진 1: <a href="https://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/cc0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@cassidyjames?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cassidy James Blaede</a>
// 사진 2: <a href="https://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/cc0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>의<a href="https://unsplash.com/@cassidyjames?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cassidy James Blaede</a>

const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
];

const chosenImage=images[Math.floor(Math.random()*images.length)];

// const bgImage=document.createElement("img");
// bgImage.src=`img/${chosenImage}`;
// bgImage.classList.add("bg");
// document.body.appendChild(bgImage);
document.body.style.backgroundImage=`url('img/${chosenImage}')`;