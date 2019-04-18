export const TODO_ADD = 'TODO_ADD';
export const TODO_EDIT_SHOW_FORM = 'TODO_EDIT_SHOW_FORM';
export const TODO_EDIT_HIDE_FORM = 'TODO_EDIT_HIDE_FORM';
export const TODO_EDITABLE_SAVE = 'TODO_EDITABLE_SAVE';
export const TODO_EDITABLE_CHANGE = 'TODO_EDITABLE_CHANGE';
export const TODO_EDIT = 'TODO_EDIT';
export const TODO_DELETE = 'TODO_DELETE';
export const TODO_TOGGLE_COMPLETED = 'TODO_TOGGLE_COMPLETED';
export const TODO_FILTER = 'TODO_FILTER';


export const todoAdd = payload => ({
  type: TODO_ADD,
  payload,
});

export const todoEdit = payload => ({
  type: TODO_EDIT,
  payload,
});

export const todoEditShowForm = payload => ({
  type: TODO_EDIT_SHOW_FORM,
  payload,
});

export const todoEditHideForm = payload => ({
  type: TODO_EDIT_HIDE_FORM,
  payload,
});

export const todoEditableSave = payload => ({
  type: TODO_EDITABLE_SAVE,
  payload,
});

export const todoEditableChange = payload => ({
  type: TODO_EDITABLE_CHANGE,
  payload,
});

export const todoDelete = payload => ({
  type: TODO_DELETE,
  payload,
});

export const todoToggleCompleted = payload => ({
  type: TODO_TOGGLE_COMPLETED,
  payload,
});

export const todoFilter = payload => ({
  type: TODO_FILTER,
  payload,
});

