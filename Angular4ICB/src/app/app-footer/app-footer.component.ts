import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./app-footer.component.html",
  styleUrls: ["./app-footer.component.css"]
})
export class AppFooterComponent implements OnInit {
  public version: string;
  constructor() {}

  ngOnInit() {
    this.version = VERSION.full;
  }
}
