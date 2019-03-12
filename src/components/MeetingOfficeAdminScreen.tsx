import * as React from "react";
import * as ReactDOM from "react-dom";


export interface IMeetingAdminUploaderProps {
    uploaded: boolean;
    notes?:string;

    title?:string;
    topic?:string;
    description?:string;
    
}

 interface IMeetingAdminUploaderFile {
    idd: number;
    name:string;
}

class MeetingAdminUploaderFile implements IMeetingAdminUploaderFile   {
    public idd: number;
    public name:string;
    constructor(opt:IMeetingAdminUploaderFile){
        this.idd=opt.idd;
        this.name=opt.name;
    }
    
}

export interface IMeetingAdminUploaderState {
    uploaded: boolean;
    notes?:string;
    files?: MeetingAdminUploaderFile[]
    
   
}



export class MeetingAdminUploader extends React.Component<IMeetingAdminUploaderProps, IMeetingAdminUploaderState> {

    constructor(props: IMeetingAdminUploaderProps) {
        super(props);
                 this.state = {
            uploaded:this.props.uploaded,
            notes:this.props.notes
        }
    }
    
    private myRef = React.createRef<any>()

    private changeState = () => {
        this.myRef.current.click();
    }

    private uploadAndSave = () => {
        this.setState({
            uploaded:true
        });
       
    }

    public fileSelectHandler = (e:React.FormEvent<HTMLElement>) => {
        //e.preventDefault();
      console.log(e);

      const meetingAdminUploader: IMeetingAdminUploaderFile = {
          idd:1,
          name:""
        
};

const UploaderFile=new MeetingAdminUploaderFile(meetingAdminUploader);


     let files1= this.state.files;
     var length = files1; 
      this.setState({
        files:files1
    });
      
    }
  
    render() {

       
        const { uploaded } = this.state;
      

        return (
            <div className='container-fluid'>

            { !uploaded  && (
                <div>                  
 <input  hidden  type="file" onChange={this.fileSelectHandler} ref={this.myRef} />

                            <button type="button" className="btn btn-light btn-sm" onClick={() => this.changeState()} >
                                Select files...
                            </button>
                            <span className="span"></span>

                            <button type="button" className="btn btn-primary btn-sm" onClick={() => this.uploadAndSave()} >
                                Upload and save
                            </button>

                </div>
            )}
            {
               uploaded && (
                            <div>
                                <i className="fa fa-check"></i>
                                Uploaded
                            </div>
               )
            }
            </div>

        );
    }
}


export function MeetingOfficeAdminScreen(node: Element, setting: IMeetingAdminUploaderProps) {
    ReactDOM.render(<div>
        <MeetingAdminUploader {...setting} />
    </div>, node);
}

export function MeetingOfficeAdminScreen1( setting: IMeetingAdminUploaderProps) {
    return (<div>
        <MeetingAdminUploader {...setting} />
    </div>);
}



