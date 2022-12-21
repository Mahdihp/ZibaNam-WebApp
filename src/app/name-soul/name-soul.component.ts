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

  public folder = "استخراج اسم روح";
  public MeAndMother = "مهدی گلزار";
  // public MeAndMother = "غضنفر نرگس";
  public AbjadNumber!: number;
  public MeAndMotherNew!: string;
  public MeAndMotherNewRemoveduplicates !: string;
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

  async ComputeAbjadWord() {
    this.MeAndMotherNew = this.MeAndMother;
    for (let i = 0; i < 12; i++) {
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


    // const toast = await this.toastController.create({
    //   message: this.AbjadNumber.toString() +" --  "+Splitnumber,
    //   duration: 1500,
    //   position: 'bottom'
    // });
    // await toast.present();
  }


}
