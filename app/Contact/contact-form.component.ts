import { Contact } from './contact';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: 'contact-form.component.html'
})
export class ContactComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Contact(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        this.model = new Contact(42, '', '');
    }

    skyDog(): Contact {
        let contact = new Contact(42, 'SkyDog',
            'Fetch any object at any distance',
            'Leslie Rollover');
        console.log('My hero is called ' + contact.name);
        return contact;
    }

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: any) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    }
}