import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      /** Adicionada verificação extra - talvez incluir em outro lugar específico de validação */
      if (!name || !email || !password) return response.status(400).send();

      await this.createUserUseCase.execute({ name, email, password });
      return response.status(201).send();
    } catch (error) {
      console.log("CreateUserController.handle error : ", error);
      return response.status(400).json({
        message: error.message || "Unexpected error",
      });
    }
  }
}
