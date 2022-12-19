import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailPageComponent } from './note-detail-page.component';

describe('NoteDetailPageComponent', () => {
  let component: NoteDetailPageComponent;
  let fixture: ComponentFixture<NoteDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoteDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
