// English with Yasamin - JavaScript Part 1

// پیام ثبت نام

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", function () {

    alert("درخواست شما ثبت شد. برای هماهنگی کلاس با شما تماس گرفته می‌شود.");

  });
}


// حرکت نرم برای لینک‌ها

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if(target){
      target.scrollIntoView({
        behavior:"smooth"
      });
    }

  });

});

// نمایش سال جاری در فوتر

const year = document.getElementById("year");

if(year){
  year.innerHTML = new Date().getFullYear();
}


// انیمیشن ظاهر شدن بخش‌ها

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";

    }

  });

});


sections.forEach(section=>{

  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "0.6s";

  observer.observe(section);

});
function sendComment() {
    document.getElementById("result").innerText =
    "✅ نظر شما با موفقیت ثبت شد و پس از بررسی نمایش داده خواهد شد.";
}
function toggleReviews(){
  const more=document.getElementById("moreReviews");
  const btn=document.querySelector(".show-btn");

  if(more.style.display==="none"){
    more.style.display="block";
    btn.innerText="بستن نظرات";
  }else{
    more.style.display="none";
    btn.innerText="مشاهده همه نظرات";
  }
}