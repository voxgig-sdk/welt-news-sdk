package core

type WeltNewsError struct {
	IsWeltNewsError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWeltNewsError(code string, msg string, ctx *Context) *WeltNewsError {
	return &WeltNewsError{
		IsWeltNewsError: true,
		Sdk:              "WeltNews",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WeltNewsError) Error() string {
	return e.Msg
}
