import { Component, Method, State } from '@stencil/core';


@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true
})
export class TodoList {

    @State() items = [];

    @Method()
    addItem(task: string, due: string) {
        this.items.push({task, due});
    }

    render() {
        return (
            <ol>
                <slot></slot>
                {
                    this.items
                        .map(item => <todo-item due={item.due}>{item.task}</todo-item>)
                }
            </ol>
        );
    }
}