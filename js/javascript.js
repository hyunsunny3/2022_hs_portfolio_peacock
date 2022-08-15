// top_btn
const topbtn=document.querySelector('.top_btn');
let scrollAmount;
window.addEventListener('scroll',function(){
    scrollAmount=this.scrollY;
    if(scrollAmount>500){
        topbtn.classList.add('visible');
    }else{
        topbtn.classList.remove('visible');
    }
})
topbtn.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('#header').scrollIntoView({behavior:'smooth'})
})

$(function(){
    // gnb
    // var firstmenu=$('nav>ul>li'),
    //     header=$('header'),
    //     headerHeight=header.height();
    
    // firstmenu.mouseenter(function(){
    //     firstmenu.find('ul').hide();
    //     $(this).find('ul').show();
    //     $('.overlay').addClass('show');
    //     var submenuHeight=$(this).find('ul').height();
    //     header.stop().animate({
    //         height:submenuHeight+headerHeight
    //     },500)
    // })
    // firstmenu.mouseleave(function(){
    //     header.stop().animate({
    //         height:headerHeight})
    //     $(this).find('ul').hide();
    //     $('.overlay').removeClass('show');
    // })

    var searchpop=$('.search_popup'),
        searchclose=$('.search_popup .close'),
        searchopen=$('nav .search');

    searchclose.click(function(){
        searchpop.hide();
    })
    searchopen.click(function(){
        searchpop.show();
    })

    var gnbpopclose=$('.gnb_popup .close'),
        gnbpop=$('.gnb_popup'),
        diningpop=$('.gnb_popup .dining'),
        cafepop=$('.gnb_popup .cafe'),
        cupboardpop=$('.gnb_popup .cupboard'),
        gourmetpop=$('.gnb_popup .gourmet');

    gnbpopclose.click(function(){
        gnbpop.hide();
    })

    $('.gnb .gnb_dining').click(function(){
        gnbpop.show();
        diningpop.show(function(){
            $(this).siblings('div').hide()
        })
    });
    $('.gnb .gnb_cafe').click(function(){
        gnbpop.show();
        cafepop.show(function(){
            $(this).siblings('div').hide()
        })
    });
    $('.gnb .gnb_cupboard').click(function(){
        gnbpop.show();
        cupboardpop.show(function(){
            $(this).siblings('div').hide()
        })
    });

    $('nav .hamburger').click(function(){
        $('.m_gnb').show();
    })
    $('.m_gnb .close').click(function(){
        $('.m_gnb').hide();
    })

    var gourmet1=$('.cont3 .img1'),
        gourmet2=$('.cont3 .img2'),
        gourmet3=$('.cont3 .img3'),
        gourmet4=$('.cont3 .img4');

    gourmet1.mouseenter(function(){
        gourmet1.addClass('on')
        $(this).siblings().removeClass('on')
    })
    gourmet2.mouseenter(function(){
        gourmet2.addClass('on')
        $(this).siblings().removeClass('on')
    })
    gourmet3.mouseenter(function(){
        gourmet3.addClass('on')
        $(this).siblings().removeClass('on')
    })
    gourmet4.mouseenter(function(){
        gourmet4.addClass('on')
        $(this).siblings().removeClass('on')
    })
});