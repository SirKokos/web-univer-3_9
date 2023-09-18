const Data = {

    "hob": {
        "about": "Меня зовут Артем, и я просто обожаю программирование. В свободное время я часто играю в видеоигры, чтобы расслабиться и отдохнуть от своих любимых занятий. Но, помимо этого, я также люблю проводить время на свежем воздухе, гуляя по парку или занимаясь спортом. Программирование - это мое главное хобби, которое позволяет мне развиваться и достигать новых высот. Я обожаю изучать новые языки программирования, создавать свои проекты и решать сложные задачи. Благодаря этому увлечению, я всегда остаюсь в курсе последних тенденций и инноваций в IT-индустрии. В свободное время я люблю отвлечься от программирования и погрузиться в мир видеоигр. Это отличный способ расслабиться и получить массу удовольствия от прохождения интересных и захватывающих уровней. Мои любимые жанры - это экшн, приключения и головоломки."
    },

    "link":{
        "page": {
            "hob_link": "file:///D:/Рабочий%20стол/web-univer-3_9/less2/hob.htmll",
            "index_link": "file:///D:/Рабочий%20стол/web-univer-3_9/less2/index.html" ,
            "info_link": "D:\\Рабочий стол\\web-univer-3_9\\less2\\info.html"
        },
        "img":{
            "img_index":"D:\\Рабочий стол\\web-univer-3_9\\less2\\img\\1kYjqk90sSM.jpg",
            "img_hob_info":"D:\\Рабочий стол\\web-univer-3_9\\less2\\img\\2.jpg"
        }

    }
}
let body = document.querySelector('body')

let wrapper  = document.createElement("div")
wrapper.className = "wrapper"
body.appendChild(wrapper)


let header = document.createElement("header")
header.className = "header"
wrapper.appendChild(header)

let  header__container = document.createElement("div")
header__container.className = "header__container"
header__container.classList.add("_container")
header.appendChild(header__container)


let header_nav = document.createElement("div")
header_nav.className = "header_nav"
header__container.appendChild(header_nav)

let header_nav_ell_1 = document.createElement("div")
header_nav_ell_1.className = "header_nav_ell"
header_nav.appendChild(header_nav_ell_1)

let header_link_1  =  document.createElement('a')
header_link_1.className = 'header_link'
header_link_1.href = Data.link.page.info_link
header_link_1.innerHTML = "Научные и учебные интересы"
header_nav_ell_1.appendChild(header_link_1)

let header_nav_ell_2 = document.createElement("div")
header_nav_ell_2.className = "header_nav_ell"
header_nav.appendChild(header_nav_ell_2)


let header_link_2  =  document.createElement('a')
header_link_2.className = 'header_link'
header_link_2.innerHTML = "Главная"
header_link_2.href = Data.link.page.index_link
header_nav_ell_2.appendChild(header_link_2)
//=======================




let main = document.createElement("main")
main.className = "main"
main.classList.add("_container")
wrapper.appendChild(main)

let hob = document.createElement("div")
hob.className = "hob"
main.appendChild(hob)

let hob_text = document.createElement("div")
hob_text.className = "hob_text"
hob_text.innerHTML = Data.hob.about
hob.appendChild(hob_text)

let main_photo = document.createElement("img")
main_photo.className = "main_photo"
main_photo.src = Data.link.img.img_hob_info
main.appendChild(main_photo)





//========================

let footer = document.createElement("footer")
footer.className = 'footer'
wrapper.appendChild(footer)

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
