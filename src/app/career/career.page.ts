import {Component, OnInit} from '@angular/core';
import {ScreenSizeService} from "../services/screen-size.service";
import {Card} from "../models/Card";

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss'],
})
export class CareerPage implements OnInit {
  isDesktop: boolean = false;
  cards: Card[] =[];
  cardsList: Card[] =[];
  activeCard: number = 0;

  constructor(private screensizeService: ScreenSizeService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
    this.cardsList[0] = {
      title: "Hiring a Film Editor and Creator for Trading Content",
      content: "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos + shorts and Reels on Instagram)",
      list: ["You will be provided with Living rent free with me (Either in Los Angeles or New York, open to be discussed)",
        "Compensation is negotiable (DM to discuss)"
        ,"Become a Partner"],
      subtitle: "Skills Needed (Most to Least Important)",
      secondList: ["Short Form Video Editing", "Lighting and Content Creation Setting Management", "Videography", "Photography", "Longform Video Editing"]
    }
    this.cardsList[1] = {
      title: "Full Stack Principal Software Developer",
      content: "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos + shorts and Reels on Instagram)",
      list: ["You will be provided with Living rent free with me (Either in Los Angeles or New York, open to be discussed)",
        "Compensation is negotiable (DM to discuss)"
        ,"Become a Partner"],
      subtitle: "Skills Needed (Most to Least Important)",
      secondList: ["Short Form Video Editing", "Lighting and Content Creation Setting Management", "Videography", "Photography", "Longform Video Editing"]
    }
    this.cardsList[2] = {
      title: "Sr Principal Software Engineer - C++ Programmer",
      content: "We're looking to increase our exposure on social media, by creating more content (specifically Youtube Videos + shorts and Reels on Instagram)",
      list: ["You will be provided with Living rent free with me (Either in Los Angeles or New York, open to be discussed)",
        "Compensation is negotiable (DM to discuss)"
        ,"Become a Partner"],
      subtitle: "Skills Needed (Most to Least Important)",
      secondList: ["Short Form Video Editing", "Lighting and Content Creation Setting Management", "Videography", "Photography", "Longform Video Editing"]
    }
    this.cards = [this.cardsList[0]];
  }
  ngOnInit() {
  }

  changeCard(number: number) {
    this.cards = [this.cardsList[number]];
    this.activeCard = number;
  }
}
