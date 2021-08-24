import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-buttons',
  templateUrl: './ngw-buttons.component.html',
  styleUrls: ['./ngw-buttons.component.scss']
})
export class NgwButtonsComponent implements OnInit {

  codeSnaps:any={
    default:`
    <button ngwBtn="" color="">Default Button</button>
    <button ngwBtn="" color="primary">Primary Button</button>
    <button ngwBtn="" color="secondary">Secondary Button</button>
    <button ngwBtn="" color="success">Success Button</button>
    <button ngwBtn="" color="warning">Warning Button</button>
    <button ngwBtn="" color="error">Error Button</button>
    `,
    outline:`
    <button ngwBtn="outline" color="">Outline Button</button>
    <button ngwBtn="outline" color="primary">Primary Button</button>
    <button ngwBtn="outline" color="secondary">Secondary Button</button>
    <button ngwBtn="outline" color="success">Success Button</button>
    <button ngwBtn="outline" color="warning">Warning Button</button>
    <button ngwBtn="outline" color="error">Error Button</button>
    `,
    outlineRounded:`
    <button ngwBtn="outline" color="" radius="9999px">Outline Rounded Button</button>
    <button ngwBtn="outline" color="primary" radius="9999px">Primary Button</button>
    <button ngwBtn="outline" color="secondary" radius="9999px">Secondary Button</button>
    <button ngwBtn="outline" color="success" radius="9999px">Success Button</button>
    <button ngwBtn="outline" color="warning" radius="9999px">Warning Button</button>
    <button ngwBtn="outline" color="error" radius="9999px">Error Button</button>
    `,
    flat:`
    <button ngwBtn="flat" color="">Flat Button</button>
    <button ngwBtn="flat" color="primary">Primary Button</button>
    <button ngwBtn="flat" color="secondary">Secondary Button</button>
    <button ngwBtn="flat" color="success">Success Button</button>
    <button ngwBtn="flat" color="warning">Warning Button</button>
    <button ngwBtn="flat" color="error">Error Button</button>
    `,
    flatRounded:`
    <button ngwBtn="flat" radius="9999px" color="">Flat Rounded Button</button>
    <button ngwBtn="flat" radius="9999px" color="primary">Primary Button</button>
    <button ngwBtn="flat" radius="9999px" color="secondary">Secondary Button</button>
    <button ngwBtn="flat" radius="9999px" color="success">Success Button</button>
    <button ngwBtn="flat" radius="9999px" color="warning">Warning Button</button>
    <button ngwBtn="flat" radius="9999px" color="error">Error Button</button>
    `,
    raised:`
    <button ngwBtn="raised" color="">Raised Button</button>
    <button ngwBtn="raised" color="primary">Primary Button</button>
    <button ngwBtn="raised" color="secondary">Secondary Button</button>
    <button ngwBtn="raised" color="success">Success Button</button>
    <button ngwBtn="raised" color="warning">Warning Button</button>
    <button ngwBtn="raised" color="error">Error Button</button>
    `,
    icon:`
    <button ngwBtn="icon" color=""><i class="material-icons">work</i></button>
    <button ngwBtn="icon" color="primary"><i class="material-icons">logout</i></button>
    <button ngwBtn="icon" color="secondary"><i class="material-icons">pending_actions</i></button>
    <button ngwBtn="icon" color="success"><i class="material-icons">article</i></button>
    <button ngwBtn="icon" color="warning"><i class="material-icons">favorite_border</i></button>
    <button ngwBtn="icon" color="error"><i class="material-icons">bug_report</i></button>
    `,
    btnIcon:`
    <button ngwBtn="flat" color=""><i class="material-icons">bug_report</i> Message</button>
    <button ngwBtn="flat" radius="9999px" color="primary"><i class="material-icons">home</i> Home</button>
    <button ngwBtn="outline" color="secondary"><i class="material-icons">favorite</i> Likes</button>
    <button ngwBtn="outline" color="success" radius="9999px"><i class="material-icons">west</i> Back</button>
    <button ngwBtn=""  radius="9999px" color="warning">Proceed<i class="material-icons">east</i></button>
    <button ngwBtn="flat" color="error"><i class="material-icons">edit_calendar</i> &nbsp;Edit</button>
    `,
    link:`
    <a href="#" ngwBtn="link">Home</a>
    `
  }
  constructor() { }

  ngOnInit(): void {
  }

}
