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
  //public MeAndMother = "مهدی گلزار";
  public MeAndMother = "غضنفر نرگس";
  public AbjadNumber!: number;
  public AbjadNumberArray!: number[];
  private abjadUtil = new AbjadUtil();

  constructor(private activatedRoute: ActivatedRoute,
              private toastController: ToastController) {
  }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  async ComputeAbjadWord() {
    this.AbjadNumber = this.abjadUtil.ComputeAbjadWord(this.MeAndMother);
    const ReversNumber = String(this.abjadUtil.ReverseNumber(this.AbjadNumber));
    //console.log(ReversNumber);
    this.AbjadNumberArray = this.abjadUtil.SplitNumer(ReversNumber);
    // const toast = await this.toastController.create({
    //   message: this.AbjadNumber.toString() +" --  "+Splitnumber,
    //   duration: 1500,
    //   position: 'bottom'
    // });
    // await toast.present();
  }


}
