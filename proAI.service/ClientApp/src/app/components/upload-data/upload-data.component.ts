import { Component, OnInit } from "@angular/core";
import { UploadData } from "src/app/models/uploadData";
import { UploadDataService } from "src/app/service/upload-data.service";

@Component({
  selector: "app-upload-data",
  templateUrl: "./upload-data.component.html",
  styleUrls: ["./upload-data.component.css"],
})
export class UploadDataComponent implements OnInit {
  
  public busy: Promise<any>;
  public getDataBusy: Promise<any>;
  
  public uploadData: UploadData = {
    id: " ",
    DatafileName: " ",
    DataContent: [],
    isDone: " ",
    createdAt: null,
  };
  public datas: UploadData[];
  public message = " ";
  public error = " ";
  private status = ["未処理", "処理中", "処理済み", "エラー"];

  constructor(private uploadDataService: UploadDataService) {}

  ngOnInit() {}

  public onDataFileCharge(e: any) {
    if (e.target.files.length > 0) {
      const csv: File = e.target.files[0];
      const fr = new FileReader();
      fr.readAsArrayBuffer(csv);
      fr.onloadend = () => {
        const binary = fr.result;
        if (typeof binary === "object") {
          this.uploadData.DatafileName = csv.name;
          const uint8 = new Uint8Array(binary);
          this.uploadData.DataContent = Array.from(uint8);
        }
      };
    } else {
      this.uploadData.DataContent = [];
    }
  }

  public async onClickSend() {
    this.message = ' ';
    this.error = ' ';
    if (this.uploadData.DataContent.length > 0) {
      this.busy = this.uploadDataService.post(this.uploadData);
      await this.busy.then(() => this.message = 'アップロードが完了しました。')
        .catch(() => this.error = 'アップロードに失敗しました。');
      this.getLasts();
    } else {
      this.error = 'アップロードに失敗しました。'; 
    }
  }

  public async getLasts() {
    this.getDataBusy = this.uploadDataService.get();
    await this.getDataBusy.then(res => this.busy = res.body).catch();
  }

  public getStatus(isDone: string): string {
    return this.status[parseInt(isDone, 10)];
  }
}
