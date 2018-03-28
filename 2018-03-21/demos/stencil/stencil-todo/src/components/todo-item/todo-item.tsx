import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'todo-item',
  styleUrl: 'todo-item.css',
  shadow: true
})
export class TodoItem {

    @Prop() due: string;
    @State() done: boolean = false;

    private get overdue(): boolean {
        return this.due ? Date.now() > Date.parse(this.due) : false;
    }

    private cssClass(): string {
        return this.done ? "done" : (this.overdue ? "overdue" : ""); 
    }

    toggleDone() {
        this.done = !this.done;
    }

    get isDone() {      
        return this.done;
    }

    render() {
        return (
            <li>
                <input type="checkbox" id="todo-state" onChange={() => this.toggleDone()} />
                <span id="todo-task" class={this.cssClass()}>
                    <slot></slot>
                </span>
            </li>
        );
    }
}