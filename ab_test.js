// Immediately-invoked function expression
(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;

        // CSS
        jQuery('<style type="text/css">.cro-section-two-header{margin:auto;font-family:Lato,sans-serif;font-style:normal;font-weight:700;font-size:36px;line-height:1.4;text-align:center;color:inherit}.cro-includes{text-align:left}p.sc-938be8eb-0.cVACZM.cro-left{text-align:left;margin-left:25px;position:relative}span.cro-icon{position:absolute;left:-20px}.cro-inc-margin{margin-top:38px}[id="1-in-personal-training"] .hneCYD{display:block;width:200px;margin:0 auto 20px!important}[id="1-in-personal-training"] .eeZTqj,[id="1-in-personal-training"] .eAA-DUa{max-width:800px}[id="1-in-personal-training"] hr{visibility:hidden}#transform-your-life .hneCYD{margin:0 auto;display:block;width:210px}#frequently-asked-questions{max-width:750px;padding:16px 0}#frequently-asked-questions > .fDNtus p,#frequently-asked-questions > .fDNtus > div{visibility:hidden}#frequently-asked-questions > .fDNtus button[aria-expanded="true"] p,#frequently-asked-questions > .fDNtus > div{display:none}#frequently-asked-questions > .fDNtus .croShow p,#frequently-asked-questions > .fDNtus > div.croShow{visibility:visible;display:block}#hear-how-issa-has-helped-students-like-you .croHelpStudent > p{margin-bottom:0}#ready-to-jumpstart-your-career-lead-gen-form-home-page h2{margin:20px auto 0;text-align:center;max-width:750px}div#ready-to-jumpstart-your-career-lead-gen-form-home-page{display:block}#transform-your-life.cbkTOA{display:block}#transform-your-life h4{margin:0 auto;text-align:center}h6 .sc-928cc42d-1.hQa-DsD,.sc-910bc342-1.ibkAOe,#we-guarantee-you’ll-succeed{display:none}div.jpWkuU{background-color:#fff;margin-top:36px}#take-your-elite-personal-trainer-career-where-you-want-it-to-go-home-page h5{display:none}#transform-your-life h4{margin-bottom:35px}@media (min-width: 768px){.bCjUpi{width:50%;height:auto;background-image:none}}@media (min-width: 1024px){.jbeDnw{width:100%}}.deRQuG .slick-arrow,.deRQuG .slick-dots{display:none!important}.croHelpStudent .cVACZM{margin-bottom:0}.deRQuG .slick-slide .cVACZM{font-style:italic}.deRQuG .slick-slide .cVACZM span{font-style:normal}.bqNKwK li::before{content:"";background-color:#000;font-size:10px;left:12px;top:8px;width:8px;height:8px}.cro-ccs-gs{margin-top:30px;text-align:center}.hLariI{columns:auto;padding-left:0;max-width:650px;margin:0 auto}.hLariI li:first-child{margin-left:15%}.hLariI li{width:42%;display:inline-block}#issa-5-steps-to-success,#proven-in-gyms,.sc-d0239c70-0.imgoLs,#home-page-evaluation-kit > p{display:none}#ready-to-jumpstart-your-career-home-page ul{padding-left:20px}h6 .hneCYD{margin-top:0}.sc-3fc86eb1-3.jzEjle .sc-938be8eb-0.cVACZM:last-child{display:none}.trustpilot-widget{min-height:180px;padding-left:35px}#customer-care-specialists .hjTfys p:first-child{border-bottom:1px solid;padding-bottom:15px}#frequently-asked-questions button[aria-expanded="true"],#customer-care-specialists button[aria-expanded="true"]{border-bottom:none}#see-all-faqs{padding-top:0}#see-all-faqs span{margin-top:0}.fVrmLd{padding:8px}.cro-mobile-expand p{text-align:center}@media (max-width: 768px){#ready-to-jumpstart-your-career-lead-gen-form-home-page h2{padding-top:16px;margin-bottom:16px}#transform-your-life h4{margin-bottom:0;padding-top:16px}.sc-3fc86eb1-1.jIEWZW .sc-938be8eb-0.cVACZM{font-weight:400}.sc-3fc86eb1-1.jIEWZW .sc-938be8eb-0.cVACZM br{display:none}h6 .hneCYD{width:150px}.sc-3fc86eb1-1.jIEWZW{text-align:center}.sc-3fc86eb1-5.kgXBzQ{width:100%}.sc-3fc86eb1-1.jIEWZW .trustpilot-widget{padding-left:0;margin:0 auto;max-width:150px}.trustpilot-widget iframe{width:100%!important}.jqKkEF > span,[id="1-in-personal-training"] .hneCYD{width:150px;margin:0 auto}#transform-your-life .hneCYD,#see-all-faqs span.hQa-DsD,.cro-ccs-gs .hneCYD{width:200px}#transform-your-life h4{margin:0 24px 16px}[id="1-in-personal-training"] ol.caWbJL{padding-right:20px}.trustpilot-widget{padding-left:0}.eiEAQK{padding-left:20px;padding-right:20px}#frequently-asked-questions .fDNtus{padding-left:20px;padding-right:20px}#customer-care-specialists .hjTfys p:first-child{margin-left:20px;margin-right:20px;padding-left:0;padding-right:0}.deRQuG .slick-track{display:block!important}.deRQuG .slick-slide{width:100%!important}#hear-how-issa-has-helped-students-like-you-slick-carousel{width:100%}.hLariI li:first-child{margin-left:34px}.hLariI li{width:auto;margin-left:34px}.jyDyJZ{padding-bottom:0}.jbeDnw{flex-direction:column-reverse}.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div .sc-8c1c8070-0.hNPcOz .sc-938be8eb-0.cVACZM.cro-includes,.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div .sc-8c1c8070-0.hNPcOz .sc-938be8eb-0.cVACZM.cro-left,.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div .sc-8c1c8070-0.hNPcOz .sc-938be8eb-0.cVACZM.cro-left ~ p{display:none}.cro-section-two-header{font-size:28px}h4.ercGeF{font-size:28px}}@media (max-width: 640px){#ready-to-jumpstart-your-career-lead-gen-form-home-page h2{font-size:28px;line-height:1.5;padding:16px 16px 0}}</style>').prependTo('body .sc-2ed62093-0.ANZgw');


        // HERO
        jQuery('.sc-938be8eb-0.cjgKeu').html('Become the personal trainer <br>you wish you had.');
        jQuery('.sc-938be8eb-0.dNomXB').text('');
        jQuery('.sc-3fc86eb1-3.jzEjle .sc-938be8eb-0.cVACZM:first').html('Learn everything you need to know to get your dream gym <br>job. Or launch your fitness side hustle. Or take charge of <br>your own training journey. ');
        jQuery('.sc-3fc86eb1-5.kgXBzQ').insertBefore('.sc-3fc86eb1-2.eizvlz .trustpilot-widget');
        jQuery('.sc-3fc86eb1-1.jIEWZW h6.sc-938be8eb-0.dLMJwg').html('<br><span class="sc-928cc42d-1 hneCYD"> <a role="link" tabindex="0" href="/certification/personal-trainer-certification" class="sc-938be8eb-0 dFKpN"><span class="sc-938be8eb-0 ixPWxn">Learn More</span></a> </span><span class="sc-928cc42d-1 hQa-DsD"> <a role="link" tabindex="0" href="/certification/elite-trainer-certification" class="sc-938be8eb-0 dFKpN"><span class="sc-938be8eb-0 iupJOP">Save Now!</span></a> </span>').next().hide();

        // SECTION 2
        jQuery('<div class="cro-section-two-header">Start with the program that’s right for you</div>').prependTo('.sc-ea0c68c0-0.glFdbE');

        jQuery('.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div:eq(0) .sc-8c1c8070-0.hNPcOz').html('<p class="sc-938be8eb-0 cVACZM"><b>Get your foot in the door and master the basics.</b></p><p class="sc-938be8eb-0 cVACZM cro-includes"><b>Includes:</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><b><span class="cro-icon">✓</span> Certified Personal Trainer Program</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Flexible certification schedule</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Your choice of open-book or NCCA accredited exams</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Unlimited study support with a success coach</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> “Get a job or it’s free” guarantee with a 98% US placement rate. (<a href="https://www.issaonline.com/resources/requirements">You just need to do this.</a>)</p><p class="sc-938be8eb-0 cVACZM"><br></p><p class="sc-938be8eb-0 cVACZM"><br></p><p class="sc-938be8eb-0 cVACZM cro-inc-margin"><br></p>');
        jQuery('.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div:eq(1) .sc-8c1c8070-0.hNPcOz').html('<p class="sc-938be8eb-0 cVACZM"><b>Gain a competitive edge that makes you stand out.</b></p><p class="sc-938be8eb-0 cVACZM cro-includes"><b>Includes:</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><b><span class="cro-icon">✓</span> Certified Personal Trainer Program</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><b><span class="cro-icon">✓</span> A specialization program of your choice</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Flexible certification schedule</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Your choice of open-book or NCCA accredited exams</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Unlimited study support with a success coach</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> “Get a job or it’s free” guarantee with a 98% US placement rate. (<a href="https://www.issaonline.com/resources/requirements">You just need to do this.</a>)</p><p class="sc-938be8eb-0 cVACZM"><br></p><p class="sc-938be8eb-0 cVACZM"><br></p>');
        jQuery('.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div:eq(2) .sc-8c1c8070-0.hNPcOz').html('<p class="sc-938be8eb-0 cVACZM"><b>Combine fitness and nutrition expertise for the ultimate coaching experience.</b></p><p class="sc-938be8eb-0 cVACZM cro-includes"><b>Includes:</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><b><span class="cro-icon">✓</span> Certified Personal Trainer Program</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><b><span class="cro-icon">✓</span> Nutrition Coach course</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><b><span class="cro-icon">✓</span> A specialization program of your choice</b></p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Flexible certification schedule</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Your choice of open-book or NCCA accredited exams</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> Unlimited study support with a success coach</p><p class="sc-938be8eb-0 cVACZM cro-left"><span class="cro-icon">✓</span> “Get a job or it’s free” guarantee with a 98% US placement rate. (<a href="https://www.issaonline.com/resources/requirements">You just need to do this.</a>)</p><p class="sc-938be8eb-0 cVACZM"><br></p>');

        jQuery('<div class="cro-mobile-expand"><p class="sc-938be8eb-0 cVACZM"><a href="#">See what it includes</a></p></div>').insertAfter('.sc-ea0c68c0-0.glFdbE .sc-ea0c68c0-3.cLtowj > div .sc-8c1c8070-0.hNPcOz');

        jQuery('.cro-mobile-expand').click(function(){

            jQuery(this).parents('.sc-5bd5d76b-2.fVrmLd').find('.sc-938be8eb-0.cVACZM.cro-includes, .sc-938be8eb-0.cVACZM.cro-left').show();
            jQuery(this).hide();

            return false;
        });


        // SECTION 3
        jQuery('#1-in-personal-training .sc-1fe71fc5-1.eeZTqj').text('Success is just 3 steps away. And we’ll help you take them.');
        jQuery('#1-in-personal-training .sc-1fe71fc5-8.jyDyJZ p:eq(0)').html('<br><b>1. </b><b>Choose the right program for you.</b> Not sure where to start? Talk to one of our Fitness Education Advisors — they’ve helped 475,000 students decide which program will lead them to success.');
        jQuery('#1-in-personal-training .sc-1fe71fc5-8.jyDyJZ p:eq(2)').html('<b>2. </b><b>Complete your program.</b> Everything you need is there — bootcamps, videos, supporting materials, fast-track and self-paced options, a Success Coach to help you prepare, and more.');
        jQuery('#1-in-personal-training .sc-1fe71fc5-8.jyDyJZ p:eq(3)').html('<b>3. </b><b>Apply what you learned.</b> Get your dream job coaching at a gym, launch your own PT side hustle or design a workout plan for a friend. Whatever path you choose, our team is here to help — from resume reviews to career advice, we’ve got you.');
        jQuery('#1-in-personal-training .sc-1fe71fc5-8.jyDyJZ p:eq(4), #1-in-personal-training .sc-1fe71fc5-8.jyDyJZ hr:eq(2)').hide();
        jQuery('<span class="sc-928cc42d-1 hneCYD"> <a role="link" tabindex="0" href="/certification/personal-trainer-certification" class="sc-938be8eb-0 dFKpN"><span class="sc-938be8eb-0 ixPWxn">Learn More</span></a> </span>').appendTo('#1-in-personal-training');


        // REVIEW SECTION
        jQuery('#homepage-customer-reviews .sc-7c115498-2.eqQnHy').text('But don’t just take our word on it. Read through the reviews yourself.');


        // SECTION TRANSFORM
        jQuery('#transform-your-life h4').text('Yes. You can change your life with ISSA.');
        jQuery('#transform-your-life h4').nextAll().remove();
        jQuery('<p class="sc-938be8eb-0 rDzmI"><b>This isn’t just a certification — it’s a path to victory.</b> A way to try something new. To break out of your rut. To try a new career and to help people. It’s a way to improve lives through fitness, nutrition and mental toughness. </p><p class="sc-938be8eb-0 rDzmI">That’s why world-record holding athletes joined forces with PhDs and the best customer support around. It’s why we have 8000+ Gym Partners, 10,000+ Trustpilot reviews and a 98% U.S. job placement rate. <b>And it’s why 475,000+ trainers and fitness lovers from 174 countries chose ISSA.</b></p><p class="sc-938be8eb-0 rDzmI">This is not a one-and-done kind of certification. Once you take a program with us, we’ll support and help until you achieve your goals. </p><span class="sc-928cc42d-1 hneCYD"> <a role="link" tabindex="0" href="/certification/personal-trainer-certification" class="sc-938be8eb-0 dFKpN"><span class="sc-938be8eb-0 ixPWxn">Get Started Now</span></a> </span>').insertAfter('#transform-your-life h4');
        jQuery('#transform-your-life h4').prependTo('#transform-your-life');

        // SECTION #5: FAQS
        jQuery('#frequently-asked-questions > .fDNtus:eq(7)').clone(true,true).insertAfter('#frequently-asked-questions > .fDNtus:eq(7)');

        jQuery('#frequently-asked-questions .sc-cfe7fb24-1.hhuiCi').text('Get the answers you need to succeed');
        jQuery('#frequently-asked-questions > .fDNtus:eq(0) h6').text('Who can take an ISSA program?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(1) h6').text('How do I know if ISSA right for me?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(2) h6').text('Are the ISSA certifications accredited?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(3) h6').text('Can I take the program even if I live internationally?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(4) h6').text('How long will it take me to complete the program?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(5) h6').text('I don’t do well with exams — will this still work for me?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(6) h6').text('Where can I work with this certificate?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(7) h6').text('When do I get my physical certificate?');
        jQuery('#frequently-asked-questions > .fDNtus:eq(8) h6').text('I want to use one of the split-month payment options — do I have to go through a credit check?');

        var faqTextFrame = '<div class="sc-617d28fc-0 hUSCzf croShow"><p class="sc-938be8eb-0 cVACZM">{{replace}}</p></div>';
        var faq0= 'Anyone 18 years of age or older can take a certification with us. You don’t need previous industry experience — all you need before taking the exam is proof of a <a href="https://www.issaonline.com/certification/cpr">CPR/AED certification.</a>';
        var faq1 = 'Do you love fitness and exercise? Do you want to help others get more active and discover the joy of working out? Do you want a different (or better) career? Or do you just love learning brand new things? If your answer was ‘yes’ to any of these, then ISSA is probably right for you. Speak to one of our Fitness Education Advisors to find out for sure though.';
        var faq2 = 'At the moment, ISSA offers five NCCA-accredited Exams — Certified Personal Trainer, Yoga Instructor, Group Exercise Instructor, Certified Indoor Cycling Instructor and Strength Training Specialist. You can sit those as part of your certification.';
        var faq3 = 'Yes! There are ISSA Certified trainers in 174 countries around the globe. If you’re wondering about a specific country, give us a  call — we’ll answer any questions.';
        var faq4 = 'Honestly? It depends on you and on the program you’re taking. When you start, you have six months to finish. You can join the ‘fast track’ program and complete the Certified Personal Trainer program in four weeks. Or you can complete it in 12 weeks with our self guided study track. Or take it at your own pace.';
        var faq5 = 'Yes. Our team is here to support you with everything you need to pass the exam — they can review practice essays, answer questions and point you in the right direction. By the time you’re sitting in front of the 200 multiple choice questions for the CPT exam, you’ll be more than ready.';
        var faq6 = 'As an ISSA Certified trainer, you can work in gyms, independently, or online. The ISSA Certification is accepted at most franchise gyms in the United States.';
        var faq7 = 'Your certificate will be mailed to you within 7-10 business days after passing your certification exam.';
        var faq8 = 'No. Everyone is 100% approved with no credit check.';

        const faqArray = [
            faq0, faq1, faq2, faq3, faq4, faq5, faq6, faq7, faq8
        ];

        for (let faqCount = 0; faqCount < (jQuery('#frequently-asked-questions > .fDNtus').length - 1); faqCount++) {

            var clickSelector = '#frequently-asked-questions > .fDNtus:eq(' + faqCount + ') button';

            jQuery(clickSelector).click(function(){

                jQuery('#frequently-asked-questions button[aria-expanded="true"]').not(jQuery(this)).click();

                if( jQuery(this).attr('aria-expanded') == 'false' ){
                    var faqText = faqTextFrame.replace('{{replace}}', faqArray[faqCount]);
                    jQuery(faqText).insertAfter( jQuery(this) );
                }else{
                    jQuery(this).next().remove();
                }

            });

        }

        jQuery('#frequently-asked-questions > .fDNtus:eq(8) button').click(function(){

            jQuery('#frequently-asked-questions button[aria-expanded="true"]').not(jQuery(this)).click();

            if( jQuery(this).attr('aria-expanded') == 'false' ){
                var faqText = faqTextFrame.replace('{{replace}}', faqArray[8]);
                jQuery(faqText).insertAfter( jQuery(this) );
                jQuery(this).attr({'aria-expanded':'true'});
                jQuery(this).find('svg').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" viewBox="0 0 512 512" class="sc-85db2149-0 koKujm"><line x1="400" y1="256" x2="112" y2="256" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>');
            }else{
                jQuery(this).next().remove();
                jQuery(this).attr({'aria-expanded':'false'});
                jQuery(this).find('svg').replaceWith('<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" viewBox="0 0 512 512" class="sc-85db2149-0 koKujm"><line x1="256" y1="112" x2="256" y2="400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="400" y1="256" x2="112" y2="256" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>');
            }

        });


        // SECTION #6: STUDENT STORIES
        jQuery('#hear-how-issa-has-helped-students-like-you > div').text('Every successful ISSA student started somewhere.');
        jQuery('<div class="sc-1fe71fc5-3 hjTfys croHelpStudent"><p class="sc-938be8eb-0 cVACZM">These are some of their stories.</p></div>').insertAfter('#hear-how-issa-has-helped-students-like-you > div');


        var intervalFunction = function()
        {

            if( jQuery('.slick-track.croShow').length <= 0 ){

                jQuery('#hear-how-issa-has-helped-students-like-you-slick-carousel .slick-track').replaceWith( '<div class="slick-track croShow" style=" opacity: 1;"> <div data-index="4" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/4NiogaAx3Ah0ko4iPJ4oMB/a9d29dfe7da330e0f3019ce4647b61a7/Kristen_Burns.jpg" alt="Kristen Burns | ISSA Strength and Conditioning Coach" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">The tools to take my training to the next level</h6> <p class="sc-938be8eb-0 cVACZM">“The Strength and Conditioning Program gave me the tools to take my training to the next level. I feel prepared and excited to help athletes reach their goals with the help of my training. I had a great experience with ISSA from initial inquiry to certification!”<span> — Kristen Burns, ISSA Strength and Conditioning Coach</span></p> </div> </div> </div> </div> <div data-index="5" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/6Ge4TpdYntlSz0fCmZTTLL/964fc20a8cf5199a3c66758ad726ae76/Jessica_Ledbetter.jpeg" alt="Jessica Ledbetter | ISSA Fitness Coach" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">Help other people change their lives </h6> <p class="sc-938be8eb-0 cVACZM">“I have had the opportunity to really help other people change their lives. I’ve had clients come in with no hope for themselves and leave with a new vision.&nbsp; I love what I do and I’m very grateful to ISSA for having the well written courses I needed to be able to become a successful fitness coach.”<span> — Jessica Ledbetter, ISSA Fitness Coach</span></p> </div> </div> </div> </div> <div data-index="6" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/3gTSlD4bHuzHJPq0bLXS6g/21ca97eb56eb6de21874818fdf25744a/Kenneth_Hunter_Jr..heic" alt="Kenneth Hunter Jr. | ISSA Fitness Coach" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">Use your passion for fitness and helping </h6> <p class="sc-938be8eb-0 cVACZM">“I studied hard and now I can proudly say I am a certified Fitness Coach through ISSA, one of the best families I have been a part of. If anyone has a passion for fitness and helping others, ISSA IS THE TEAM TO JOIN.”<span> — Kenneth Hunter Jr., ISSA Fitness Coach</span></p> </div> </div> </div> </div> <div data-index="7" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/c3WWK8NdmMpTnumiPFoQB/71b74f5159a8e683e734ed386fab284a/Michael_Brooks.jpeg" alt="Michael Brooks | ISSA Certified Personal Trainer" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">Start a career or continue your education </h6> <p class="sc-938be8eb-0 cVACZM">“I\'ve been coaching clients for over 35 years and worked with several other personal training certifying agencies. ISSA has been by FAR the best experience great customer service and up to date courses. I would recommend them to anyone looking to start a career or continue their education in the Health &amp; Wellness industry.”<span> — Michael Brooks, ISSA Certified Personal Trainer</span></p> </div> </div> </div> </div></div>' );

            }

        };
        var refreshIntervalId = null;
        refreshIntervalId = setInterval(intervalFunction, 250);

        // REMOVE FOR LAUNCH
        //jQuery('#hear-how-issa-has-helped-students-like-you-slick-carousel .slick-track').replaceWith( '<div class="slick-track croShow" style=" opacity: 1;"> <div data-index="4" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/4NiogaAx3Ah0ko4iPJ4oMB/a9d29dfe7da330e0f3019ce4647b61a7/Kristen_Burns.jpg" alt="Kristen Burns | ISSA Strength and Conditioning Coach" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">The tools to take my training to the next level</h6> <p class="sc-938be8eb-0 cVACZM">“The Strength and Conditioning Program gave me the tools to take my training to the next level. I feel prepared and excited to help athletes reach their goals with the help of my training. I had a great experience with ISSA from initial inquiry to certification!”<span> — Kristen Burns, ISSA Strength and Conditioning Coach</span></p> </div> </div> </div> </div> <div data-index="5" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/6Ge4TpdYntlSz0fCmZTTLL/964fc20a8cf5199a3c66758ad726ae76/Jessica_Ledbetter.jpeg" alt="Jessica Ledbetter | ISSA Fitness Coach" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">Help other people change their lives </h6> <p class="sc-938be8eb-0 cVACZM">“I have had the opportunity to really help other people change their lives. I’ve had clients come in with no hope for themselves and leave with a new vision.&nbsp; I love what I do and I’m very grateful to ISSA for having the well written courses I needed to be able to become a successful fitness coach.”<span> — Jessica Ledbetter, ISSA Fitness Coach</span></p> </div> </div> </div> </div> <div data-index="6" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/3gTSlD4bHuzHJPq0bLXS6g/21ca97eb56eb6de21874818fdf25744a/Kenneth_Hunter_Jr..heic" alt="Kenneth Hunter Jr. | ISSA Fitness Coach" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">Use your passion for fitness and helping </h6> <p class="sc-938be8eb-0 cVACZM">“I studied hard and now I can proudly say I am a certified Fitness Coach through ISSA, one of the best families I have been a part of. If anyone has a passion for fitness and helping others, ISSA IS THE TEAM TO JOIN.”<span> — Kenneth Hunter Jr., ISSA Fitness Coach</span></p> </div> </div> </div> </div> <div data-index="7" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style="outline: none; width: 280px;"> <div> <div class="sc-1f674df0-0 bcHDeD"> <div class="sc-1f674df0-1 iJbglg"><img src="//images.ctfassets.net/psi7gc0m4mjv/c3WWK8NdmMpTnumiPFoQB/71b74f5159a8e683e734ed386fab284a/Michael_Brooks.jpeg" alt="Michael Brooks | ISSA Certified Personal Trainer" loading="lazy" class="sc-1f674df0-2 gibOlL"> </div> <div class="sc-1f674df0-4 roJdt"><h6 class="sc-938be8eb-0 gfQBST">Start a career or continue your education </h6> <p class="sc-938be8eb-0 cVACZM">“I\'ve been coaching clients for over 35 years and worked with several other personal training certifying agencies. ISSA has been by FAR the best experience great customer service and up to date courses. I would recommend them to anyone looking to start a career or continue their education in the Health &amp; Wellness industry.”<span> — Michael Brooks, ISSA Certified Personal Trainer</span></p> </div> </div> </div> </div></div>' );


        // SECTION #7: SUPPORT
        jQuery('#customer-care-specialists .sc-cfe7fb24-1.hhuiCi').text('Our Student Success team will help you every step of the way');
        jQuery('<div class="sc-1fe71fc5-3 hjTfys"><p class="sc-938be8eb-0 cVACZM">From choosing the right certification to start with, to helping you pass the exam and land your dream job, we’re here for you. Meet the different teams.</p></div>').insertAfter('#customer-care-specialists .sc-cfe7fb24-1.hhuiCi');
        jQuery('#customer-care-specialists > .fDNtus:eq(0) h5').text('The Fitness Education Advisers will help you find the right certification');
        jQuery('#customer-care-specialists > .fDNtus:eq(1) h5').text('The Student Engagement Team will help you finish your cert and land a job');
        jQuery('#customer-care-specialists > .fDNtus:eq(2) h5').text('The Student Services Team will help you with all your admin needs');
        jQuery('#customer-care-specialists > .fDNtus:eq(3) h5').text('The Education Support Team will help you thrive while you study');
        jQuery('#customer-care-specialists > .fDNtus:eq(4) h5').text('The Student Financial Services will help you find practical finance solutions');

        jQuery('<div class="cro-ccs-gs"><span class="sc-928cc42d-1 hneCYD"> <a role="link" tabindex="0" href="/certification/personal-trainer-certification" class="sc-938be8eb-0 dFKpN"><span class="sc-938be8eb-0 ixPWxn">Get Started Now</span></a> </span></div>').appendTo('#customer-care-specialists');

        jQuery('#customer-care-specialists > .fDNtus button').click(function(){
            //jQuery( jQuery(this).parent().siblings('.sc-617d28fc-0.fDNtus').find('button') ).click();
        });

        jQuery('#customer-care-specialists > .fDNtus button').click(function(){
            var current_index = jQuery(this).parent().index();
            var ccs_selector = ':eq(' + current_index + ')';
           jQuery('#customer-care-specialists > div').not(ccs_selector).find('button[aria-expanded="true"]').click();
        });

        /*var supportTextFrame = '<div class="sc-617d28fc-0 hUSCzf">{{replace}}</div>';
        var support0 = '<p class="sc-938be8eb-0 cVACZM">Available whenever needed, ISSA Fitness Education Advisers are dedicated to every student’s individual growth and success. They are here to help you find the best certification to achieve your goals so you can be as successful as you want to be.</p><p class="sc-938be8eb-0 cVACZM">This department specializes in helping you with:</p><ul class="sc-cdd2bb4d-1 bqNKwK"> <li> <p class="sc-938be8eb-0 cVACZM">Understanding and navigating the process of becoming a trainer</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Finding the right certificate option to fit your goals</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Being a friendly point of contact when you need help</p> </li></ul>';
        var support1 = '<p class="sc-938be8eb-0 cVACZM">Student Engagement is focused on putting students first, and providing appropriate accommodations to create a smooth journey while in the hands of ISSA.</p><p class="sc-938be8eb-0 cVACZM">This department specializes in helping customers with:</p><ul class="sc-cdd2bb4d-1 bqNKwK"> <li> <p class="sc-938be8eb-0 cVACZM">Finding the resources and tips so you can master the material</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Staying motivated throughout your entire certification journey</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Navigating the job interview, career and side hustle option</p> </li></ul>';
        var support2 = '<p class="sc-938be8eb-0 cVACZM">The Student Services Team is here to help with course extensions, making sure you receive your hard earned certifications, and also keeping those certifications up to date.</p><p class="sc-938be8eb-0 cVACZM">This department specializes in helping customers with:</p><ul class="sc-cdd2bb4d-1 bqNKwK"> <li> <p class="sc-938be8eb-0 cVACZM">Course extensions</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Ensuring receipt of certifications</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Certification renewals</p> </li></ul>';
        var support3 = '<p class="sc-938be8eb-0 cVACZM">Recognized as a world leader in fitness education, ISSA is dedicated to ensuring students receive the tools and resources they need to thrive. With ISSA’s Education Support Team, enrolled ISSA students will receive expert assistance from our experienced team of advisers.</p><p class="sc-938be8eb-0 cVACZM">This department specializes in helping customers with:</p><ul class="sc-cdd2bb4d-1 bqNKwK"> <li> <p class="sc-938be8eb-0 cVACZM">Exam questions and preparation</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Understanding how to navigate the dashboard</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Finding the right answers when stuck</p> </li></ul>';
        var support4 = '<p class="sc-938be8eb-0 cVACZM">Here to help with all your billing needs, ISSA’s Student Financial Services team is committed to providing students with practical financial solutions.</p><p class="sc-938be8eb-0 cVACZM">This department specializes in helping customers with:</p><ul class="sc-cdd2bb4d-1 bqNKwK"> <li> <p class="sc-938be8eb-0 cVACZM">Payment card processing</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Completing your payment obligations</p> </li> <li> <p class="sc-938be8eb-0 cVACZM">Finding individualized financial solutions to meet your needs</p> </li></ul>';

        const supportArray = [
            support0, support1, support2, support3, support4
        ];

        for (let supportCount = 0; supportCount < jQuery('#customer-care-specialists > .fDNtus').length; supportCount++) {

            var clickSelector2 = '#customer-care-specialists > .fDNtus:eq(' + supportCount + ')';

            jQuery(clickSelector2).click(function(){

                if( jQuery(this).find('button').attr('aria-expanded') == 'false' ){
                    var supportText = supportTextFrame.replace('{{replace}}', supportArray[supportCount]);
                    jQuery(supportText).insertAfter( jQuery(this).find('button') );
                }else{
                    jQuery(this).find('button').next().remove();
                }

            });

        }*/

        // SECTION #8: SPECIALIZATIONS
        jQuery('#homepage-specializations-list-2 div:first').text('Never stop growing.');
        jQuery('#homepage-specializations-list-2 div:eq(1) p').text('Master new specializations so you can serve your clients better and earn more.');


        // SECTION #9: FINAL CTA
        jQuery('#ready-to-jumpstart-your-career-home-page h2').text('Take that first, bold step towards your goals — figure out if ISSA is right for you.');
        jQuery('#ready-to-jumpstart-your-career-home-page p:eq(0)').text('Our evaluation kit will help you:');
        jQuery('#ready-to-jumpstart-your-career-home-page p:eq(1)').remove();
        jQuery('#ready-to-jumpstart-your-career-home-page ul').replaceWith('<ul class="sc-cdd2bb4d-0 iZEAQX"> <li><p class="sc-938be8eb-0 cVACZM">See if you have the five qualities every successful trainer needs</p></li> <li><p class="sc-938be8eb-0 cVACZM">Discover which program is right for you through the personalized quiz</p></li> <li><p class="sc-938be8eb-0 cVACZM">Take a look at the exact career paths you’ll be able to take</p></li></ul><p class="sc-938be8eb-0 cVACZM">By the end, you’ll know if ISSA’s right for you. And you’ll have everything you need to enroll on hand.</p>');
        jQuery('#ready-to-jumpstart-your-career-home-page h2').prependTo('#ready-to-jumpstart-your-career-lead-gen-form-home-page');


    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
