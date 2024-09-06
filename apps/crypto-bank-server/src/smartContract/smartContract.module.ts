import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmartContractModuleBase } from "./base/smartContract.module.base";
import { SmartContractService } from "./smartContract.service";
import { SmartContractController } from "./smartContract.controller";
import { SmartContractResolver } from "./smartContract.resolver";

@Module({
  imports: [SmartContractModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmartContractController],
  providers: [SmartContractService, SmartContractResolver],
  exports: [SmartContractService],
})
export class SmartContractModule {}
