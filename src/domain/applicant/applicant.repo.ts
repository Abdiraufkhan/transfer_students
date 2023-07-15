import { log } from "console";
import { CreateApplicantDto} from "./applicant.dto";
import Applicant from "./applicant.model";
import applicant from "./applicant.model";

class ApplicantRepo {
    public getAll(): Promise<Applicant[]> {
        return Applicant.findAll();
    }

    public getById(id: string): Promise<Applicant> {
        return Applicant.findOne({
            where: {
                id,
            },
            raw: true,
        });
    }

    public create(data: CreateApplicantDto): Promise<Applicant> {
        return Applicant.create({
            ...data,
        });
    }

    public async update(data): Promise<any> {
        const applicant = await Applicant.update({
          ...data
        }, {
          where: {
            id: data.id
          },
          returning: true      
        })
        return applicant
        
    }
    
}

export default ApplicantRepo;
