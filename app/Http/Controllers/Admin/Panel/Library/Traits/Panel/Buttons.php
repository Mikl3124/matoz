<?php

namespace App\Http\Controllers\Admin\Panel\Library\Traits\Panel;

use App\Http\Controllers\Admin\Panel\Library\Traits\Panel\Buttons\Button;

trait Buttons
{
	// ------------
	// BUTTONS
	// ------------
	
	// TODO: $this->crud->reorderButtons('stack_name', ['one', 'two']);
	
	/**
	 * Add a button to the CRUD table view.
	 *
	 * @param string $stack Where should the button be visible? Options: top, line, bottom
	 * @param string $name The name of the button. Unique.
	 * @param string $type Type of button: view or model_function
	 * @param string $content The HTML for the button
	 * @param string|bool $position Where in the stack it should be placed: beginning or end
	 */
	public function addButton($stack, $name, $type, $content, $position = false)
	{
		if ($position == false) {
			switch ($stack) {
				case 'line':
					$position = 'beginning';
					break;
				
				default:
					$position = 'end';
					break;
			}
		}
		
		switch ($position) {
			case 'beginning':
				$this->buttons->prepend(new Button($stack, $name, $type, $content));
				break;
			
			default:
				$this->buttons->push(new Button($stack, $name, $type, $content));
				break;
		}
	}
	
	/**
	 * @param $stack
	 * @param $name
	 * @param $model_function_name
	 * @param bool $position
	 */
	public function addButtonFromModelFunction($stack, $name, $model_function_name, $position = false)
	{
		$this->addButton($stack, $name, 'model_function', $model_function_name, $position);
	}
	
	/**
	 * @param $stack
	 * @param $name
	 * @param $view
	 * @param bool $position
	 */
	public function addButtonFromView($stack, $name, $view, $position = false)
	{
		$view = 'admin.panel.buttons.' . $view;
		
		$this->addButton($stack, $name, 'view', $view, $position);
	}
	
	/**
	 * @return mixed
	 */
	public function buttons()
	{
		return $this->buttons;
	}
	
	/**
	 * ...
	 */
	public function initButtons()
	{
		$this->buttons = collect();
		
		// line stack
		$this->addButton('line', 'preview', 'view', 'admin.panel.buttons.preview', 'end');
		$this->addButton('line', 'update', 'view', 'admin.panel.buttons.update', 'end');
		$this->addButton('line', 'revisions', 'view', 'admin.panel.buttons.revisions', 'end');
		$this->addButton('line', 'delete', 'view', 'admin.panel.buttons.delete', 'end');
		
		// top stack
		$this->addButton('top', 'parent', 'view', 'admin.panel.buttons.parent');
		$this->addButton('top', 'create', 'view', 'admin.panel.buttons.create');
		$this->addButton('top', 'reorder', 'view', 'admin.panel.buttons.reorder');
	}
	
	/**
	 * @param $name
	 */
	public function removeButton($name)
	{
		$this->buttons = $this->buttons->reject(function ($button) use ($name) {
			return $button->name == $name;
		});
	}
	
	/**
	 * Remove all buttons
	 */
	public function removeAllButtons()
	{
		$this->buttons = collect([]);
	}
	
	/**
	 * @param $stack
	 */
	public function removeAllButtonsFromStack($stack)
	{
		$this->buttons = $this->buttons->reject(function ($button) use ($stack) {
			return $button->stack == $stack;
		});
	}
	
	/**
	 * @param $name
	 * @param $stack
	 */
	public function removeButtonFromStack($name, $stack)
	{
		$this->buttons = $this->buttons->reject(function ($button) use ($name, $stack) {
			return $button->name == $name && $button->stack == $stack;
		});
	}
	
	/**
	 * @param $name
	 * @param null $stack
	 * @return bool
	 */
	public function hasButton($name, $stack = null)
	{
		$buttonFound = $this->buttons->first(function ($button) use ($name, $stack) {
			if (!empty($stack)) {
				return $button->name == $name && $button->stack == $stack;
			} else {
				return $button->name == $name;
			}
		});
		
		return (!empty($buttonFound) && $buttonFound->name == $name);
	}
}
