import { Component } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { faCheckDouble, faDollarSign, faFilePdf, faFileText, faFolderOpen, faList, faPen, faQrcode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  icons={
    file1:faFilePdf,
    file2:faFolderOpen,
    qrcode:faQrcode,
    higherConnect:faUserGraduate,
    categories:faList,
    grammarly:faCheckDouble,
    pdf:faFilePdf,
    templates:faFileText,
    scratch:faPen,
    wordtune:faDollarSign
   
  }
  active=1


}
