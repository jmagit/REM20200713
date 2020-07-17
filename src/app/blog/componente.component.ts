import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogViewModelService } from './servicios.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.css']
})
export class BlogComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.vm.list();
  }
}
@Component({
  selector: 'app-blog-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.css']
})
export class BlogListComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.vm.list();
  }
}
@Component({
  selector: 'app-blog-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class BlogAddComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.vm.add();
  }
}
@Component({
  selector: 'app-blog-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class BlogEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: BlogViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = +params.get('id'); // (+) converts string 'id' to a number
        if (id) {
          this.vm.edit(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy() { 
    this.obs$.unsubscribe(); 
  }
}
@Component({
  selector: 'app-blog-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
})
export class BlogViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: BlogViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = +params.get('id'); // (+) converts string 'id' to a number
        if (id) {
          this.vm.view(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy() { 
    this.obs$.unsubscribe(); 
  }
}
export const BLOG_COMPONENTES = [
  BlogComponent, BlogListComponent, BlogAddComponent, BlogEditComponent,
  BlogViewComponent,
];
