const Data = {
    "index": {
        "name": "Сим Артем Евгеньевич",
        "about": {
            "univer": "Институт высоких технологий и пьезотехники ЮФУ НКТБ \"Пьезоприбор\" ЮФУ",
            "main-info": "IT-отрасль - это быстроразвивающаяся индустрия, которая включает в себя множество направлений и специализаций. Она охватывает все аспекты работы с информацией, начиная от разработки программного обеспечения и заканчивая управлением информационными системами."
        }
    },


    "info": {
        "about": "я стремлюсь к саморазвитию и образованию. Я регулярно читаю книги по программированию, изучаю новые технологии и участвую в различных образовательных проектах. Это помогает мне оставаться в курсе последних новостей и тенденций в мире технологий и программирования. Таким образом, моя жизнь наполнена множеством интересных занятий и увлечений, которые делают меня счастливым и удовлетворенным. Программирование, видеоигры, спорт и образование - все это является неотъемлемой частью меня и моей жизни, и я не могу представить свою жизнь без них."
    },



    "hob": {
        "about": "Меня зовут Артем, и я просто обожаю программирование. В свободное время я часто играю в видеоигры, чтобы расслабиться и отдохнуть от своих любимых занятий. Но, помимо этого, я также люблю проводить время на свежем воздухе, гуляя по парку или занимаясь спортом. Программирование - это мое главное хобби, которое позволяет мне развиваться и достигать новых высот. Я обожаю изучать новые языки программирования, создавать свои проекты и решать сложные задачи. Благодаря этому увлечению, я всегда остаюсь в курсе последних тенденций и инноваций в IT-индустрии. В свободное время я люблю отвлечься от программирования и погрузиться в мир видеоигр. Это отличный способ расслабиться и получить массу удовольствия от прохождения интересных и захватывающих уровней. Мои любимые жанры - это экшн, приключения и головоломки."
    },


    "link":{
        "page": {
            "hob_link": "file:///D:/Рабочий%20стол/web-univer-3_9/less2/hob.html",
            "index_link": "file:///D:/Рабочий%20стол/web-univer-3_9/less2/index.html" ,
            "info_link": "D:\\Рабочий стол\\web-univer-3_9\\less2\\info.html"
        },
        "img":{
            "img_index":"D:\\Рабочий стол\\web-univer-3_9\\less2\\img\\1kYjqk90sSM.jpg",
            "img_hob_info":"less2/img/1kYjqk90sSM.jpg"
        }

    }
}

let div = document.createElement("div")
div.className = "wrapper"

let body = document.querySelector('body')
body.appendChild(div)


let header = document.createElement("header")
header.className = 'header'


document.getElementsByClassName("wrapper")[0].appendChild(header);

let header__container = document.createElement("div")
let nav = document.createElement("div")
let header_nav_ell_1 = document.createElement("div")
let header_nav_ell_2 = document.createElement("div")

let header_link_info = document.createElement("a")
let header_link_hob = document.createElement("a")


header_link_info.className = "header_link"
header_link_info.href = Data.link.page.info_link
header_link_info.innerHTML = "Научные и учебные интересы"

header_link_hob.className = "header_link"
header_link_hob.href = Data.link.page.hob_link
header_link_hob.innerHTML = "Хобби и увлечения"

header_nav_ell_1.className = "header_nav_ell"
header_nav_ell_2.className = "header_nav_ell"

nav.className = "header_nav"
header__container.className = "header__container"
header__container.classList.add("_container");

let header_block = document.getElementsByClassName("header")
let nav_container =  header_block[0].appendChild(header__container).appendChild(nav)

nav_container.appendChild(header_nav_ell_1).appendChild(header_link_info)
nav_container.appendChild(header_nav_ell_2).appendChild(header_link_hob)

// ==========================================



let main = document.createElement('main')
main.classList.add("main","_container")
div.appendChild(main)

let main_container = document.createElement("div")
main.appendChild(main_container)
main_container.className = "main__container"

let main_photo_container = document.createElement("div")
main_photo_container.className = "main_photo-container"
main_container.appendChild(main_photo_container)

let img_1 = document.createElement("img")
img_1.className = "main_photo"
img_1.src = Data.link.img.img_index
main_photo_container.appendChild(img_1)



let photo_text = document.createElement("div")
photo_text.className = "photo-text"
photo_text.innerHTML = "Привет текст"
main_photo_container.appendChild(photo_text)


let main_text = document.createElement("div")
main_text.className = "main__text"
main_container.appendChild(main_text)

let main_text_name = document.createElement("div")
main_text_name.className = "main__text-name"
main_text_name.innerHTML = Data.index.name
main_text.appendChild(main_text_name)

let main_text_uni = document.createElement("div")
main_text_uni.className = "main__text-uni"
main_text_uni.innerHTML = Data.index.about.univer
main_text.appendChild(main_text_uni)


let main_text_info = document.createElement("div")
main_text_info.className = "main__text-info"
main_text_info.innerHTML = Data.index.about["main-info"]
main_text.appendChild(main_text_info)

//========================
let footer = document.createElement("div")
footer.className = "footer"
div.appendChild(footer)

let footer_container = document.createElement("div")
footer_container.className = "footer_container"
footer_container.classList.add( "_container")
footer.appendChild(footer_container)


let footer_sms_container= document.createElement("div")
footer_sms_container.className = "footer_sms_container"
footer_container.appendChild(footer_sms_container)


let footer_sms_el_1= document.createElement("div")
footer_sms_el_1.className = "footer_sms_el"
footer_sms_container.appendChild(footer_sms_el_1)
let a_1 = document.createElement("a")
a_1.className = "sms_el"
a_1.innerHTML = "Инстаграмм"
footer_sms_el_1.appendChild(a_1)

let footer_sms_el_2= document.createElement("div")
footer_sms_el_2.className = "footer_sms_el"
footer_sms_container.appendChild(footer_sms_el_2)
let a_2 = document.createElement("a")
a_2.className = "sms_el"
a_2.innerHTML = "Вконтакте"
footer_sms_el_2.appendChild(a_2)


let footer_sms_el_3= document.createElement("div")
footer_sms_el_3.className = "footer_sms_el"
footer_sms_container.appendChild(footer_sms_el_3)
let a_3 = document.createElement("a")
a_3.className = "sms_el"
a_3.innerHTML = "Телеграмм"
footer_sms_el_3.appendChild(a_3)





