import { Component, OnInit } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    cssEase: 'ease-in',
    arrows: true,
    prevArrow: '<span class="prev prev-hover" style="margin-right: 20px; cursor:pointer;"><img src="../../assets/lorem-img/arrow-left.svg"></span>',
    nextArrow: '<span class="next next-hover" style="margin-left: 20px; cursor:pointer;"><img src="../../assets/lorem-img/arrow-right.svg"></span>',
  };

  ngOnInit(): void {
  }

  slickInit(e: any) {
    var $firstAnimatingElements = $('.single-banner').find('[data-animation]');
    this.doAnimations($firstAnimatingElements);
  }
  beforeChange(e: any) {
    var $firstAnimatingElements = $('.single-banner').find('[data-animation]');
    this.doAnimations($firstAnimatingElements);
  }

  public doAnimations(elements: JQuery<HTMLElement>) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }

}
