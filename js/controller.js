'use strict';

$(document).ready(init);

function init() {
    renderProjs()
}

function renderProjs() {
    var projs = getProjsToDisplay()
    var strHTMLs = projs.map(function (proj) {
        return ` 

  <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" onclick="onUpdateModal('${proj.id}')" data-toggle="modal" href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid img-thumb" src="${proj.url}" alt="">
    </a>
    <div class="portfolio-caption bg-white ">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>
  </div>
</div>

        `
    });
    var $elProjContainer = $('.projs-container')
    strHTMLs.join('')
    $elProjContainer.html(strHTMLs)
}


function onUpdateModal(projId) {

    var proj = getProjById(projId)
    console.log(proj)
    $('.portfolio-modal h2').text(proj.name)
    $('.proj-title').text(proj.title)
    $('.proj-desc').text(proj.desc)
    $('.labels').text(proj.labels)
    $('.date').text(formatDate(proj.date))
    $('.proj-img').attr('src', proj.url);
    $('.github-link').attr('href', proj.gitUrl)
}


function onSendEmail() {
    var subject = $('#subject').val();
    var message = $('#message').val();
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=danielkevaa@gmail.com&su=${subject}&body=${message}&bcc=`, '_blank')
    $('#subject').val('')
    $('#message').val('')
}

function onOpenProjLink() {
    window.open(``, '_blank')
}