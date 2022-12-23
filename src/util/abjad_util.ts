export class AbjadUtil {
  private Abjad = new Map<string, number>();
  private AbjadLafz = new Map<string, string>();
  private AbjadReverse = new Array<AbjadRevers>();


  private WordAtashi = new Array<string>();
  private WordKhaki = new Array<string>();
  private WordBadi = new Array<string>();
  private WordAbi = new Array<string>();


  constructor() {

    this.WordAtashi.push("ا");
    this.WordAtashi.push("ه");
    this.WordAtashi.push("ط");
    this.WordAtashi.push("م");
    this.WordAtashi.push("ف");
    this.WordAtashi.push("ش");
    this.WordAtashi.push("ذ");

    this.WordKhaki.push("د");
    this.WordKhaki.push("ح");
    this.WordKhaki.push("ل");
    this.WordKhaki.push("ع");
    this.WordKhaki.push("ر");
    this.WordKhaki.push("خ");
    this.WordKhaki.push("غ");

    this.WordBadi.push("ب");
    this.WordBadi.push("و");
    this.WordBadi.push("ی");
    this.WordBadi.push("ن");
    this.WordBadi.push("ص");
    this.WordBadi.push("ت");
    this.WordBadi.push("ض");

    this.WordAbi.push("ج");
    this.WordAbi.push("ز");
    this.WordAbi.push("ک");
    this.WordAbi.push("س");
    this.WordAbi.push("ق");
    this.WordAbi.push("ث");
    this.WordAbi.push("ظ");

    this.Abjad.set("الف", 1);
    this.Abjad.set("ا", 1);
    this.Abjad.set("آ", 1);
    this.Abjad.set("ء", 1);
    this.Abjad.set("ب", 2);
    this.Abjad.set("ج", 3);
    this.Abjad.set("د", 4);
    this.Abjad.set("ه", 5);
    this.Abjad.set("ة", 5);
    this.Abjad.set("و‍", 6);
    this.Abjad.set("ز", 7);
    this.Abjad.set("ح", 8);
    this.Abjad.set("ط", 9);
    this.Abjad.set("ی", 10);
    this.Abjad.set("ي", 10);
    this.Abjad.set("ک", 20);
    this.Abjad.set("ل", 30);
    this.Abjad.set("م", 40);
    this.Abjad.set("ن", 50);
    this.Abjad.set("س", 60);
    this.Abjad.set("ع", 70);
    this.Abjad.set("ف", 80);
    this.Abjad.set("ص", 90);
    this.Abjad.set("ق", 100);
    this.Abjad.set("ر", 200);
    this.Abjad.set("ش", 300);
    this.Abjad.set("ت", 400);
    this.Abjad.set("ث", 500);
    this.Abjad.set("خ", 600);
    this.Abjad.set("ذ", 700);
    this.Abjad.set("ض", 800);
    this.Abjad.set("ظ", 900);
    this.Abjad.set("غ", 1000);
    this.Abjad.set("گ", 20);
    this.Abjad.set("چ", 3);
    this.Abjad.set("پ", 2);
    this.Abjad.set("ژ", 7);

    console.log("this.Abjad.size: " + this.Abjad.size);
    this.AbjadReverse.push({Number: 1, Word: "ا"});
    this.AbjadReverse.push({Number: 2, Word: "ب"});
    this.AbjadReverse.push({Number: 3, Word: "ج"});
    this.AbjadReverse.push({Number: 4, Word: "د"});
    this.AbjadReverse.push({Number: 5, Word: "ه"});
    this.AbjadReverse.push({Number: 6, Word: "و‍"});
    this.AbjadReverse.push({Number: 7, Word: "ز"});
    this.AbjadReverse.push({Number: 8, Word: "ح"});
    this.AbjadReverse.push({Number: 9, Word: "ط"});
    this.AbjadReverse.push({Number: 10, Word: "ی"});
    this.AbjadReverse.push({Number: 20, Word: "ک"});
    this.AbjadReverse.push({Number: 30, Word: "ل"});
    this.AbjadReverse.push({Number: 40, Word: "م"});
    this.AbjadReverse.push({Number: 50, Word: "ن"});
    this.AbjadReverse.push({Number: 60, Word: "س"});
    this.AbjadReverse.push({Number: 70, Word: "ع"});
    this.AbjadReverse.push({Number: 80, Word: "ف"});
    this.AbjadReverse.push({Number: 90, Word: "ص"});
    this.AbjadReverse.push({Number: 100, Word: "ق"});
    this.AbjadReverse.push({Number: 200, Word: "ر"});
    this.AbjadReverse.push({Number: 300, Word: "ش"});
    this.AbjadReverse.push({Number: 400, Word: "ت"});
    this.AbjadReverse.push({Number: 500, Word: "ث"});
    this.AbjadReverse.push({Number: 600, Word: "خ"});
    this.AbjadReverse.push({Number: 700, Word: "ذ"});
    this.AbjadReverse.push({Number: 800, Word: "ض"});
    this.AbjadReverse.push({Number: 900, Word: "ظ"});
    this.AbjadReverse.push({Number: 1000, Word: "غ"});
    console.log("this.AbjadReverse.length: " + this.AbjadReverse.length);

    this.AbjadLafz.set("ا", "الف");
    this.AbjadLafz.set("ب", "با");
    this.AbjadLafz.set("ت", "تا");
    this.AbjadLafz.set("ث", "ثا");
    this.AbjadLafz.set("ج", "جیم");
    this.AbjadLafz.set("ح", "حا");
    this.AbjadLafz.set("خ", "خا");
    this.AbjadLafz.set("د", "دال");
    this.AbjadLafz.set("ذ", "ذال");
    this.AbjadLafz.set("ر", "را");
    this.AbjadLafz.set("ز", "زا");
    this.AbjadLafz.set("س", "سین");
    this.AbjadLafz.set("ش", "شین");
    this.AbjadLafz.set("ص", "صاد");
    this.AbjadLafz.set("ض", "ضاد");
    this.AbjadLafz.set("ط", "طا");
    this.AbjadLafz.set("ظ", "ظا");
    this.AbjadLafz.set("ع", "عین");
    this.AbjadLafz.set("غ", "غین");
    this.AbjadLafz.set("ف", "فا");
    this.AbjadLafz.set("ق", "قاف");
    this.AbjadLafz.set("ک", "کاف");
    this.AbjadLafz.set("ل", "لام");
    this.AbjadLafz.set("م", "میم");
    this.AbjadLafz.set("ن", "نون");
    this.AbjadLafz.set("ه", "ها");
    this.AbjadLafz.set("و", "واو");
    this.AbjadLafz.set("ی", "یا");
    console.log("this.AbjadLafz.size: " + this.AbjadLafz.size);

  }

  public ComputeTabhWord(Word: string[]) {
    var WordAtashi = new Array<string>();
    var WordKhaki = new Array<string>();
    var WordBadi = new Array<string>();
    var WordAbi = new Array<string>();

    var AllWord = new Map<string, string>();

    for (const i in Word) {
      for (const j in this.WordAtashi) {
        if (Word[i] == this.WordAtashi[j]) {
          WordAtashi.push(this.WordAtashi[j]);
        }
      }
    }

    for (const i in Word) {
      for (const j in this.WordKhaki) {
        if (Word[i] == this.WordKhaki[j]) {
          WordKhaki.push(this.WordKhaki[j]);
        }
      }
    }

    for (const i in Word) {
      for (const j in this.WordBadi) {
        if (Word[i] == this.WordBadi[j]) {
          WordBadi.push(this.WordBadi[j]);
        }
      }
    }

    for (const i in Word) {
      for (const j in this.WordAbi) {
        if (Word[i] == this.WordAbi[j]) {
          WordAbi.push(this.WordAbi[j]);
        }
      }
    }

    AllWord.set("آتشی", WordAtashi.toString());
    AllWord.set("خاکی", WordKhaki.toString());
    AllWord.set("بادی", WordBadi.toString());
    AllWord.set("آبی", WordAbi.toString());
    console.log(AllWord.entries());
    return AllWord;
  }

  public RemoveduplicateWord(Word: string): string {
    //wwre => wre
    var FinalStr = "";
    let strings1 = Array.from(new Set(Word.split('')));
    for (let i = 0; i < strings1.length; i++) {
      FinalStr += strings1[i];
    }
    return FinalStr;
  }

  public ComputeAbjadToLafz(Word: string[]): string[] {
    var Ajbad: string[] = [];
    for (const i in Word) {
      if (this.AbjadLafz.get(Word[i]) != undefined) {
        var Lafz = String(this.AbjadLafz.get(Word[i]));
        // console.log(Lafz);
        let SplitLafz = Lafz.split("");
        for (const j in SplitLafz) {
          Ajbad.push(SplitLafz[j]);
        }
      }
    }
    return Ajbad;
  }

  public ComputeNumbetToAbjad(Number: number[]) {
    var Ajbad: string[] = [];
    for (const i in Number) {
      for (const j in this.AbjadReverse) {
        if (Number[i] == this.AbjadReverse[j].Number) {
          // console.log(this.AbjadReverse[j]);
          Ajbad.push(this.AbjadReverse[j].Word);
        }
      }
    }
    return Ajbad;
  }

  public ComputeAbjadWord(Word: string): number {
    var AbjadNumber = 0;
    var array = Word.replace(/\s/g, "").split('');
    for (var index in array) {
      if (this.Abjad.get(array[index]) != undefined) {
        //  console.log(this.Abjad.get(array[index]));
        AbjadNumber += Number(this.Abjad.get(array[index]));
      }
    }
    //console.log("ComputeAbjad: " + AbjadNumber);
    return AbjadNumber;
  }

  public ReverseNumber(number: number): string {
    // 2460  => 0 6 4 2
    // 500
    var Num = String(number).split("");
    var StrNum = "";
    for (let i = Num.length - 1; i >= 0; i--) {
      StrNum += Num[i];
    }
    //console.log(StrNum);
    return StrNum;
  }

  public ExtrcatNumber(number: number): number[] {
    // 2000 or 5000 or 50,000 or 200,0000
    // 2,1000 - 50,1000 - 50,1000 - 200,1000
    var Num = number / 1000;  // 2
    return [Num, 1000];
  }

  public SplitNumer(number: string): number[] {
    // 317 => 3 , 1 , 7 => 300,10,7
    // 005
    const WordNumber = number.split("");
    var NumberArray: number[] = [];
    for (let i = 0; WordNumber.length > i; i++) {
      //  3 , 1 , 7
      //1 , 10 , 100 , 1000 , 10000 , 100000 , 1,000,000,000 , 10,000,000,000 , 100,000,000,000
      if (i == 0) {
        const Num = Number(WordNumber[i]) * 1;
        this.extracted(Num, NumberArray);
      } else if (i == 1) {
        const Num = Number(WordNumber[i]) * 10;
        this.extracted(Num, NumberArray);
      } else if (i == 2) {
        const Num = Number(WordNumber[i]) * 100;
        this.extracted(Num, NumberArray);
      } else if (i == 3) {
        const Num = Number(WordNumber[i]) * 1000;
        this.extracted(Num, NumberArray);
      } else if (i == 4) {
        const Num = Number(WordNumber[i]) * 10_000;
        this.extracted(Num, NumberArray);
      } else if (i == 5) {
        const Num = Number(WordNumber[i]) * 100_000;
        this.extracted(Num, NumberArray);
      } else if (i == 6) {
        const Num = Number(WordNumber[i]) * 1_000_000;
        this.extracted(Num, NumberArray);
      } else if (i == 7) {
        const Num = Number(WordNumber[i]) * 1_000_000_000;
        this.extracted(Num, NumberArray);
      } else if (i == 8) {
        const Num = Number(WordNumber[i]) * 100_000_000_000;
        this.extracted(Num, NumberArray);
      } else if (i == 9) {
        const Num = Number(WordNumber[i]) * 1000_000_000_000;
        if (Num > 0) {
          NumberArray.push(Num);
        }
      }
    }
    return NumberArray.reverse();
  }

  private extracted(Num: number, NumberArray: number[]) {
    if (Num > 0 && Num <= 1000) {
      NumberArray.push(Num);
    } else if (Num > 1000) {
      // 2155
      let numbers = this.ExtrcatNumber(Num).reverse();
      NumberArray.push(...numbers);
    }
  }
}

export class AbjadRevers {
  Word!: string;
  Number!: number;

  constructor(Number: number, Word: string) {
    this.Word = Word;
    this.Number = Number;
  }
}
