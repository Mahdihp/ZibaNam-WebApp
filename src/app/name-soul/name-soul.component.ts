import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToastController} from "@ionic/angular";
import {FormControl, FormGroup} from "@angular/forms";
import {AbjadUtil} from "../../util/abjad_util";

@Component({
  selector: 'app-name-soul',
  templateUrl: './name-soul.component.html',
  styleUrls: ['./name-soul.component.scss'],
})
export class NameSoulComponent implements OnInit {

//  git push https://<GITHUB_ACCESS_TOKEN>@github.com/<GITHUB_USERNAME>/<REPOSITORY_NAME>.git
  //  git push https://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@github.com/Mahdihp/ZibaNam-WebApp.git
  public folder = "استخراج اسم روح";
  public MeAndMother = "";
  public Batn: number = 12;
  // public MeAndMother = "غضنفر نرگس";
  public AbjadNumber!: number;
  public MeAndMotherNew!: string;
  public MeAndMotherNewRemoveduplicates !: string;
  public TabhSoulName !: any;
  public AbjadSoulName!: number;
  public AbjadNumberArray!: number[];
  public AbjadWordArray!: string[];
  public AbjadLafzArray!: string[];
  private abjadUtil = new AbjadUtil();

  constructor(private activatedRoute: ActivatedRoute,
              private toastController: ToastController) {
  }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
//38740977
  async ComputeAbjadWord() {
    this.MeAndMotherNew = this.MeAndMother;
    for (let i = 0; i < this.Batn; i++) {
      this.AbjadNumber = this.abjadUtil.ComputeAbjadWord(this.MeAndMotherNew);
      console.log("AbjadNumber: " + (i + 1) + " => " + this.AbjadNumber);

      const ReversNumber = String(this.abjadUtil.ReverseNumber(this.AbjadNumber));
      //console.log("ReversNumber: " + (i + 1) + " => " + ReversNumber);

      this.AbjadNumberArray = this.abjadUtil.SplitNumer(ReversNumber);
      console.log("AbjadNumberArray : " + (i + 1) + " => " + this.AbjadNumberArray);


      this.AbjadWordArray = this.abjadUtil.ComputeNumbetToAbjad(this.AbjadNumberArray.reverse());
      console.log("AbjadWordArray : " + (i + 1) + " => " + this.AbjadWordArray);


      this.AbjadLafzArray = this.abjadUtil.ComputeAbjadToLafz(this.AbjadWordArray);
      console.log("AbjadLafzArray : " + (i + 1) + " => " + this.AbjadLafzArray);

      this.MeAndMotherNew = "";
      for (let i = 0; i < this.AbjadLafzArray.length; i++) {
        this.MeAndMotherNew += this.AbjadLafzArray[i];
      }
      this.MeAndMotherNewRemoveduplicates = this.abjadUtil.RemoveduplicateWord(this.MeAndMotherNew);
      // console.log("MeAndMother ComputeAbjadWord: " + (i + 1) + " => " + this.MeAndMother);
    }
    this.AbjadSoulName =  this.abjadUtil.ComputeAbjadWord(this.MeAndMotherNewRemoveduplicates);
    this.TabhSoulName  = this.abjadUtil.ComputeTabhWord(this.MeAndMotherNewRemoveduplicates.split(""));



    //console.log(map);
    // const toast = await this.toastController.create({
    //   message: this.AbjadNumber.toString() +" --  "+Splitnumber,
    //   duration: 1500,
    //   position: 'bottom'
    // });
    // await toast.present();

  }


}
